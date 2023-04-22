import {FileSystemTree} from "@webcontainer/api";
import {EditorView} from "codemirror";
import {Extension} from "@codemirror/state";

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

export interface Theme {
  name: string;
  extension: Extension;
}

export interface ThemeConfig {
  name: string;
  dark: boolean;
  background: string;
  foreground: string;
  selection: string;
  cursor: string;
  dropdownBackground: string;
  dropdownBorder: string;
  activeLine: string;
  matchingBracket: string;
  keyword: string;
  storage: string;
  variable: string;
  parameter: string;
  function: string;
  string: string;
  constant: string;
  type: string;
  class: string;
  number: string;
  comment: string;
  heading: string;
  invalid: string;
  regexp: string;
}