import installDeps from "./installDeps";
import {ideState} from "../../state";

async function startShell() {
  await installDeps();
  ideState.mutate(async (val) => {
    val.shellProcess = await val.containerInstance.spawn('jsh', {
      terminal: {
        cols: val.terminal.cols,
        rows: val.terminal.rows,
      },
    });
  });
}

export default startShell;
