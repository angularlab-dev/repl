import {basicSetup} from "codemirror";
import {EditorState} from "@codemirror/state";
import {keymap} from "@codemirror/view";
import {autocompletion} from "@codemirror/autocomplete";
import {indentWithTab} from "@codemirror/commands";
import { indentUnit } from "@codemirror/language";

export default [
  basicSetup,
  EditorState.tabSize.of(2),
  keymap.of([indentWithTab]),
  indentUnit.of('\t'),
  autocompletion(),
];
