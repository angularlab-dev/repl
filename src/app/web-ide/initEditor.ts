import {EditorView} from "codemirror";
import {javascript} from "@codemirror/lang-javascript";
import editorExtensions from "./editor-extensions";
import {ideState} from "../../state";

export default function initEditor() {
  const state = ideState();
  const editorEl = state.options?.editorEl;
  const onContentChange = state.options?.editorOptions.onContentChange;
  const editorView = new EditorView({
    extensions: [javascript(), ...editorExtensions],
    parent: editorEl,
    dispatch: async (transaction) => {
      editorView?.update([transaction]);
      onContentChange && await onContentChange(editorView?.state.doc.toString());
    }
  })
  ideState.mutate((val) => {
    val.editorView = editorView;
  });
  EditorView.theme({
    '.cm-gutter, .cm-content': {
      maxHeight: '150px',
      minHeight: '100px',
      overflow: 'auto',
    },
  });
}
