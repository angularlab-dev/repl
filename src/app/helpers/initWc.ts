import startShell from "./startShell";
import { ideState } from "../../state";

async function initWc() {
  const { vm, terminal, options } = ideState();
  const tree = options?.tree || {};
  const iframeEl = options?.iframeEl;
  const { WebContainer } = await import('@webcontainer/api');

  if (!vm) {
    terminal.write("will boot web container........\n");
    const containerInstance = await WebContainer.boot()
    await containerInstance.mount(tree);
    containerInstance.on('server-ready', (port: number, url: string) => {
      terminal.write('preview ready.....');
      if (iframeEl) {
        iframeEl.src = url;
      }
    });

    ideState.mutate((val) => {
      val.vm = containerInstance;
    });
    await startShell();
  }
}
export default initWc;
