import { ideState } from "../../state";
import {IdeFile} from "../../state.types";
import {EditorState} from "@codemirror/state";

async function openFile(file: IdeFile| null): Promise<void> {
  const { editor, vm } = ideState();
  const doc = file !== null ? await vm.fs.readFile(file.path, 'utf-8') : '';
  editor?.setState(EditorState.create({ doc }));
}

export default openFile;
