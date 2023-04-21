import startShell from "./startShell";
import { ideState } from "../../state";

async function initWC() {
  const { containerInstance, terminal, options } = ideState();
  const tree = options?.tree || {};
  const iframeEl = options?.iframeEl;
  const { WebContainer } = await import('@webcontainer/api');

  if (!containerInstance) {
    terminal.write("will boot web container........\n");
    const containerInstance = await WebContainer.boot()
    await containerInstance.mount(tree);
    containerInstance.on('server-ready', (port: number, url: string) => {
      console.log('READY!!!!!');
      if (iframeEl) {
        iframeEl.src = url;
      }
    });

    ideState.mutate((val) => {
      val.containerInstance = containerInstance;
    });
    await startShell();
    const { shellProcess } = ideState();
    shellProcess.output.pipeTo(new WritableStream({
      write(data) {
        terminal.write(data);
      }
    })).then();

    const input = shellProcess.input.getWriter();

    terminal.onData((data: string) => {
      input.write(data);
    });
  }
}
export default initWC;
