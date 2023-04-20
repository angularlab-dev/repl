import startShell from "./startShell";
import state from "./state";

async function initWC() {
  const {get, set} = state;

  const value = get();
  const { containerInstance, terminal, options: { tree, iframeEl } } = value;
  const { WebContainer } = await import('@webcontainer/api');

  if (!containerInstance) {
    terminal.write("will boot web container........\n");
    const containerInstance = await WebContainer.boot()
    await containerInstance.mount(tree);
    containerInstance.on('server-ready', (port: number, url: string) => {
      console.log('READY!!!!!');
      iframeEl.src = url;
    });

    set({
      ...value,
      containerInstance,
    });
    await startShell();
    const { shellProcess } = get();
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
