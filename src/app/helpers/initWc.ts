import startShell from "./startShell";
import { ideState } from "../../state";
import installDeps from "./installDeps";
import startApp from "./startApp";

async function initWc() {
  const { vm, output, options } = ideState();
  const tree = options?.tree || {};
  const iframeEl = options?.iframeEl;
  const { WebContainer } = await import('@webcontainer/api');

  if (!vm) {
    output.write("will boot web container........\n");
    const containerInstance = await WebContainer.boot()
    await containerInstance.mount(tree);
    containerInstance.on('server-ready', (port: number, url: string) => {
      output.write('preview ready.....');
      if (iframeEl) {
        iframeEl.src = url;
      }
    });

    ideState.mutate((val) => {
      val.vm = containerInstance;
    });
    await startShell();
    await installDeps();
    await startApp();
  }
}
export default initWc;
