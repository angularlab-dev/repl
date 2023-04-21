import initEditor from "./initEditor";
import { WebIdeOptions } from "./type";
import initTerminal from "./initTerminal";
import initWc from "./initWc";
import { ideState } from "../../state";

function initWs(options: WebIdeOptions) {
  ideState.mutate((val) => {
    val.options = options;
  });
  const startWorkspace = async (): Promise<void> => {
    await initTerminal();
    await initWc();
  }
  initEditor();
  startWorkspace().then();
}
export default initWs;
