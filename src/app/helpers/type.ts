import {FileSystemTree} from "@webcontainer/api";
import {EditorView} from "codemirror";

export interface WebIdeOptions {
  tree: FileSystemTree;
  editorEl: HTMLElement;
  iframeEl: HTMLIFrameElement;
  terminalEl: HTMLElement;
}
export interface IdeState {
  editor: EditorView | null;
  vm: any;
  terminal: any;
  options?: WebIdeOptions;
}
