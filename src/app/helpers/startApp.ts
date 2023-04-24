import { ideState } from "../../state";

async function startApps() {
  const { vm, output } = ideState();
  const startProcess = await vm.spawn('turbo', ['start']);
  startProcess.output.pipeTo(new WritableStream({
    write(data) {
      output.write(data);
    }
  })).then();
}

export default startApps;
