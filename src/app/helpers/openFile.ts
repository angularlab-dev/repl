import { ideState } from "../../state";
import {IdeFile} from "../../state.types";
import {EditorState} from "@codemirror/state";
import editorExtensions from "./editor-extensions";
import {javascript} from "@codemirror/lang-javascript";
import {EditorView} from "codemirror";

// const config = {
//   name: 'dracula',
//   dark: false,
//   background: '#282A36',
//   foreground: '#F8F8F2',
//   selection: '#44475A',
//   cursor: '#F8F8F2',
//   dropdownBackground: '#282A36',
//   dropdownBorder: '#191A21',
//   activeLine: '#282A36',
//   matchingBracket: '#44475A',
//   keyword: '#FF79C6',
//   storage: '#FF79C6',
//   variable: '#F8F8F2',
//   parameter: '#F8F8F2',
//   function: '#50FA7B',
//   string: '#F1FA8C',
//   constant: '#BD93F9',
//   type: '#8BE9FD',
//   class: '#8BE9FD',
//   number: '#BD93F9',
//   comment: '#6272A4',
//   heading: '#BD93F9',
//   invalid: '#FF5555',
//   regexp: '#F1FA8C',
// };
export const config = {
  name: 'aura',
  dark: true,
  background: '#21202e',
  foreground: '#edecee',
  selection: '#3d375e7f',
  cursor: '#a277ff',
  dropdownBackground: '#21202e',
  dropdownBorder: '#3b334b',
  activeLine: '#a394f033',
  matchingBracket: '#a394f033',
  keyword: '#a277ff',
  storage: '#a277ff',
  variable: '#edecee',
  parameter: '#edecee',
  function: '#ffca85',
  string: '#61ffca',
  constant: '#61ffca',
  type: '#82e2ff',
  class: '#82e2ff',
  number: '#61ffca',
  comment: '#6d6d6d',
  heading: '#a277ff',
  invalid: '#ff6767',
  regexp: '#61ffca',
}
let darcula = EditorView.theme({
  '&': {
    color: config.foreground,
    backgroundColor: config.background,
  },

  '.cm-content': {caretColor: config.cursor},

  '.cm-cursor, .cm-dropCursor': {borderLeftColor: config.cursor},
  '&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {backgroundColor: config.selection},

  '.cm-panels': {backgroundColor: config.dropdownBackground, color: config.foreground},
  '.cm-panels.cm-panels-top': {borderBottom: '2px solid black'},
  '.cm-panels.cm-panels-bottom': {borderTop: '2px solid black'},

  '.cm-searchMatch': {
    backgroundColor: config.dropdownBackground,
    outline: `1px solid ${config.dropdownBorder}`
  },
  '.cm-searchMatch.cm-searchMatch-selected': {
    backgroundColor: config.selection
  },

  '.cm-activeLine': {backgroundColor: config.activeLine},
  '.cm-selectionMatch': {backgroundColor: config.selection},

  '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
    backgroundColor: config.matchingBracket,
    outline: 'none'
  },

  '.cm-gutters': {
    backgroundColor: config.background,
    color: config.foreground,
    border: 'none'
  },
  '.cm-activeLineGutter': {backgroundColor: config.background},

  '.cm-foldPlaceholder': {
    backgroundColor: 'transparent',
    border: 'none',
    color: config.foreground
  },
  '.cm-tooltip': {
    border: `1px solid ${config.dropdownBorder}`,
    backgroundColor: config.dropdownBackground,
    color: config.foreground,
  },
  '.cm-tooltip .cm-tooltip-arrow:before': {
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  '.cm-tooltip .cm-tooltip-arrow:after': {
    borderTopColor: config.foreground,
    borderBottomColor: config.foreground,
  },
  '.cm-tooltip-autocomplete': {
    '& > ul > li[aria-selected]': {
      background: config.selection,
      color: config.foreground,
    }
  }
}, {dark: config.dark});

async function openFile(file: IdeFile| null): Promise<void> {
  const { editor, vm } = ideState();
  const doc = file !== null ? await vm.fs.readFile(file.path, 'utf-8') : '';
  editor?.setState(EditorState.create({ doc, extensions: [...editorExtensions, javascript( { typescript: true }), darcula] }));
}

export default openFile;
