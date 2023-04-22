import { EditorView } from "codemirror";
import { ideState } from "../../state";
import writeCurrentFile from "./writeCurrentFile";

export default function initEditor() {
  const { options } = ideState();
  const editorEl = options?.editorEl;

  const editorView = new EditorView({
    parent: editorEl,
    dispatch: async (transaction) => {
      editorView?.update([transaction]);
      await writeCurrentFile();
    },
  });
  ideState.mutate((val) => {
    val.editor = editorView;
  });
}
