import { ideState } from "../../state";

async function initTerminal() {
  const terminalEl = ideState().options?.terminalEl;
  const outputEl = ideState().options?.outputEl;
  if (!terminalEl) {
    throw new Error('Terminal Element is not defined');
  }
  if (!outputEl) {
    throw new Error('Output Element is not defined');
  }

  const { Terminal } = await import('xterm');
  const { FitAddon } = await import('xterm-addon-fit');

  const fitAddon1 = new FitAddon();
  const fitAddon2 = new FitAddon();
  const terminal: any = new Terminal({
    convertEol: true,
  });
  const output: any = new Terminal({
    convertEol: true,
  });

  terminal.loadAddon(fitAddon1);
  terminal.open(terminalEl);
  output.loadAddon(fitAddon2);
  output.open(outputEl);

  fitAddon1.fit();
  fitAddon2.fit();
  ideState.mutate((val) => {
    val.terminal = terminal;
    val.output = output;
  });
}
export default initTerminal;
