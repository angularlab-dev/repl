import {ideState} from "../../state";

async function startShell() {
  const { vm, terminal } = ideState();
  const shell = await vm.spawn('jsh', {
    terminal: {
      cols: terminal.cols,
      rows: terminal.rows,
    },
  });
  shell.output.pipeTo(new WritableStream({
    write(data) {
      terminal.write(data);
    }
  })).then();

  const input = shell.input.getWriter();

  terminal.onData((data: string) => {
    input.write(data);
  });
}

export default startShell;
