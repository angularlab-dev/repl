import { signal } from "@angular/core";
import { IdeFile, IdeTree } from "./state.types";
import {IdeState} from "./app/web-ide/type";

export const openedFiles = signal<IdeFile[]>([]);

export const ideTree = signal<IdeTree | null>(null)

export const currentFile = signal<IdeFile | null>(null);

export const ideState = signal<IdeState>({
  editorView: null,
  containerInstance: null,
  terminal: null,
  shellProcess: null,
});
