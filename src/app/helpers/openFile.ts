import {ideState, theme} from "../../state";
import {IdeFile} from "../../state.types";
import {EditorState} from "@codemirror/state";
import editorExtensions from "./editor-extensions";
import {javascript} from "@codemirror/lang-javascript";

async function openFile(file: IdeFile): Promise<void> {
  const { editor, vm } = ideState();
  const doc = await vm.fs.readFile(file.path, 'utf-8');
  editor?.setState(EditorState.create({ doc, extensions: [...editorExtensions, javascript( { typescript: true }), theme().extension] }));
}

export default openFile;
