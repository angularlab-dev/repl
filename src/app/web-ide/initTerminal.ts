import state from "./state";

async function initTerminal() {
  const {get, set} = state;

  const value = get();
  const { options: { terminalEl }} = value;
  const { Terminal } = await import('xterm');
  const { FitAddon } = await import('xterm-addon-fit');

  const fitAddon = new FitAddon();
  const terminal = new Terminal({
    convertEol: true,
  })

  terminal.loadAddon(fitAddon);
  terminal.open(terminalEl);

  fitAddon.fit();
  set({
    ...value,
    terminal,
  });
}
export default initTerminal;
