import { ideState } from "../../state";

async function installDeps() {
  const { vm, terminal } = ideState();
  const installProcess = await vm.spawn('npm', ['install']);
  installProcess.output.pipeTo(new WritableStream({
    write(data) {
      terminal.write(data);
    }
  })).then();
  // Wait for install command to exit
  return installProcess.exit;
}

export default installDeps;