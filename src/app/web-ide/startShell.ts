import installDeps from "./installDeps";
import state from "./state";

async function startShell() {
  const {get, set} = state;
  await installDeps();
  const value = get();
  set({
    ...value,
    shellProcess: await value.containerInstance.spawn('jsh', {
      terminal: {
        cols: value.terminal.cols,
        rows: value.terminal.rows,
      },
    }),
  });
}

export default startShell;
