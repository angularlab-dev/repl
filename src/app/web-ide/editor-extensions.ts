import {basicSetup} from "codemirror";
import {EditorState} from "@codemirror/state";
import {keymap} from "@codemirror/view";
import {acceptCompletion} from "@codemirror/autocomplete";
import {indentWithTab} from "@codemirror/commands";
import {HighlightStyle, indentUnit, syntaxHighlighting} from "@codemirror/language";
import {tags} from "@lezer/highlight";

export default [
  basicSetup,
  EditorState.tabSize.of(2),
  keymap.of([{ key: 'Tab', run: acceptCompletion }, indentWithTab]),
  indentUnit.of('\t'),
  syntaxHighlighting(
    HighlightStyle.define([
      // TODO add more styles
      { tag: tags.tagName, color: '#ffac00' },
      { tag: tags.keyword, color: '#da6200' },
      { tag: tags.punctuation, color: '#da6200' },
      { tag: tags.comment, color: '#858383' },
      { tag: tags.className, color: '#ffc400' },
      { tag: tags.propertyName, color: '#ffc400' },
      { tag: tags.bracket, color: '#d9d7d7' },
      { tag: tags.variableName, color: '#d9d7d7' },
      { tag: tags.operator, color: '#d9d7d7' },
      { tag: tags.string, color: '#6592c2' },
      { tag: tags.number, color: '#6592c2' }
    ])
  )
];
