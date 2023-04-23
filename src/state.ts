import { signal } from "@angular/core";
import { IdeFile, IdeTree } from "./state.types";
import {IdeState, Theme} from "./app/helpers/type";
import {githubDark} from "./app/themes/github-dark";

export const openedFiles = signal<IdeFile[]>([]);
export const ideTree = signal<IdeTree | null>(null)
export const currentFile = signal<IdeFile | null>(null);
export const ideState = signal<IdeState>({
  editor: null,
  vm: null,
  terminal: null,
  output: null,
});
export const theme = signal<Theme>(githubDark);
export const mode = signal<'code' | 'preview'>('preview');
export const devToolsView = signal<'output' | 'terminal'>('output');
