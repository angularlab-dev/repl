import {EditorState} from "@codemirror/state";
import initEditor from "./initEditor";
import { WebIdeApi, WebIdeOptions } from "./type";
import initTerminal from "./initTerminal";
import initWC from "./initWC";
import {FileSystemTree} from "@webcontainer/api";
import {IdeFile} from "../../state.types";
import { ideState } from "../../state";

function WebIde(options: WebIdeOptions): WebIdeApi {
  ideState.mutate((val) => {
    val.options = options;
  });

  const startWorkspace = async (): Promise<void> => {
    await initTerminal();
    await initWC();
  }
  const getTree = async (): Promise<FileSystemTree> => {
    const { containerInstance } = ideState();
    return containerInstance.fs.readdir('');
  };
  return {
    editor: {
      init: initEditor,
      setFile: async (file: IdeFile| null) => {
        const { editorView, containerInstance } = ideState();
        const doc = file !== null ? await containerInstance.fs.readFile(file.path, 'utf-8') : '';
        editorView?.setState(EditorState.create({ doc }));
      },
    },
    ws: {
      start: startWorkspace,
      writeFile: (path: string, content: string) => {
        ideState().containerInstance.fs.writeFile(path, content);
      },
    },
    getTree,
  };
}
export default WebIde;
