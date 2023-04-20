import {FileSystemTree} from "@webcontainer/api";
import {EditorView} from "codemirror";

export interface EditorFile {
  name: string;
  content: string;
}

interface EditorOptions {
  defaultContent?: string;
  onContentChange: (content?: string) => Promise<void>;
}
export interface WebIdeOptions {
  tree: FileSystemTree;
  editorEl: HTMLElement;
  iframeEl: HTMLIFrameElement;
  terminalEl: HTMLElement;
  editorOptions: EditorOptions;
}
export interface InitIdeReturn {
  containerInstance: any;
  editorView: EditorView;
  terminal: any;
  setEditorContent: (content: string) => void;
}

export interface IdeState {
  editorView: EditorView | null;
  containerInstance: any;
  terminal: any;
  shellProcess?: any;
  options: WebIdeOptions;
}
export interface WebIdeApi {
  editor: {
    init: () => void,
    setContent: (content: string) => void;
  };
  ws: {
    start: () => void;
    writeFile: (path: string, content: string) => void;
  };
  getState: () => IdeState;
  getTree: () => Promise<FileSystemTree>;
}

export type UseState = [IdeState, (nesState: IdeState) => void];
