import { ideState } from "../../state";

async function installDeps() {
  const { vm, output } = ideState();
  const installProcess = await vm.spawn('turbo', ['install']);
  installProcess.output.pipeTo(new WritableStream({
    write(data) {
      output.write(data);
    }
  })).then();
  // Wait for install command to exit
  return installProcess.exit;
}

export default installDeps;
