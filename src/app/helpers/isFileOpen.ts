import {IdeFile} from "../../state.types";
import {currentFile, mode} from "../../state";

export default function isFileOpen(file: IdeFile) {
  return mode() === 'code' && currentFile()?.path === file.path;
}
