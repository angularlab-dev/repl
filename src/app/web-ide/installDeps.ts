import state from "./state";

async function installDeps() {
  const {get} = state;
  const { containerInstance, terminal } = get();
  const installProcess = await containerInstance.spawn('npm', ['install']);
  installProcess.output.pipeTo(new WritableStream({
    write(data) {
      terminal.write(data);
    }
  })).then();
  // Wait for install command to exit
  return installProcess.exit;
}

export default installDeps;
