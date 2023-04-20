import {EditorState} from "@codemirror/state";
import initEditor from "./initEditor";
import {WebIdeApi, WebIdeOptions} from "./type";
import initTerminal from "./initTerminal";
import initWC from "./initWC";
import state from "./state";
import {FileSystemTree} from "@webcontainer/api";

function WebIde(options: WebIdeOptions): WebIdeApi {
  const {get, set} = state;

  set({
    editorView: null,
    containerInstance: null,
    terminal: null,
    shellProcess: null,
    options,
  });

  const setEditorContent = (content: string) => {
    const { editorView } = get();
    editorView?.setState(EditorState.create({ doc: content }))
  };
  const startWorkspace = async (): Promise<void> => {
    await initTerminal();
    await initWC();
  }
  const getTree = async (): Promise<FileSystemTree> => {
    const { containerInstance } = get();
    return containerInstance.fs.readdir('');
  };
  return {
    editor: {
      init: initEditor,
      setContent: setEditorContent,
    },
    ws: {
      start: startWorkspace,
      writeFile: (path: string, content: string) => {
        get().containerInstance.fs.writeFile(path, content);
      },
    },
    getState: get,
    getTree,
  };
}
export default WebIde;
