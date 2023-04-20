import {EditorView} from "codemirror";
import {javascript} from "@codemirror/lang-javascript";
import editorExtensions from "./editor-extensions";
import state from "./state";

export default function initEditor() {
  const {get, set} = state;
  const value = get();
  const { options: { editorEl, editorOptions: { onContentChange } } } = value;
  const editorView = new EditorView({
    extensions: [javascript(), ...editorExtensions],
    parent: editorEl,
    dispatch: async (transaction) => {
      editorView?.update([transaction]);
      onContentChange && await onContentChange(editorView?.state.doc.toString());
    }
  })
  set({
    ...value,
    editorView,
  });
  EditorView.theme({
    '.cm-gutter, .cm-content': {
      maxHeight: '150px',
      minHeight: '100px',
      overflow: 'auto',
    },
  });
}
