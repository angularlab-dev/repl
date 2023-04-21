import {EditorView} from "codemirror";
import {javascript} from "@codemirror/lang-javascript";
import editorExtensions from "./editor-extensions";
import {currentFile, ideState} from "../../state";
import writeCurrentFile from "./writeCurrentFile";

export default function initEditor() {
  const state = ideState();
  const editorEl = state.options?.editorEl;
  const editorView = new EditorView({
    extensions: [javascript(), ...editorExtensions],
    parent: editorEl,
    dispatch: async (transaction) => {
      editorView?.update([transaction]);
      await writeCurrentFile();
    }
  })
  ideState.mutate((val) => {
    val.editor = editorView;
  });
  EditorView.theme({
    '.cm-gutter, .cm-content': {
      maxHeight: '150px',
      minHeight: '100px',
      overflow: 'auto',
    },
  });
}
