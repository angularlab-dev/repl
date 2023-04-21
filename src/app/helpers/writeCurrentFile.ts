import { currentFile, ideState } from "../../state";

async function writeCurrentFile(): Promise<void> {
  const { vm, terminal, editor } = ideState();
  if (!vm) {
    terminal.write("The Virtual Machine has not been initialised");
    return;
  }
  await vm.fs.writeFile(currentFile()!.path, editor?.state.doc.toString());
}

export default writeCurrentFile;
