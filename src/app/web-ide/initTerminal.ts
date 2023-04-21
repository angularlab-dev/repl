import { ideState } from "../../state";

async function initTerminal() {
  const terminalEl = ideState().options?.terminalEl;
  if (!terminalEl) {
    throw new Error('Terminal Element is not defined');
  }

  const { Terminal } = await import('xterm');
  const { FitAddon } = await import('xterm-addon-fit');

  const fitAddon = new FitAddon();
  const terminal = new Terminal({
    convertEol: true,
  })

  terminal.loadAddon(fitAddon);
  terminal.open(terminalEl);

  fitAddon.fit();
  ideState.mutate((val) => {
    val.terminal = terminal;
  });
}
export default initTerminal;
