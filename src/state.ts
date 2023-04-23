import { signal } from "@angular/core";
import { IdeFile, IdeTree } from "./state.types";
import {IdeState, Theme} from "./app/helpers/type";
import {dracula} from "./app/themes/dracula";

export const openedFiles = signal<IdeFile[]>([]);
export const ideTree = signal<IdeTree | null>(null)
export const currentFile = signal<IdeFile | null>(null);
export const ideState = signal<IdeState>({
  editor: null,
  vm: null,
  terminal: null,
});
export const theme = signal<Theme>(dracula);
export const mode = signal<'code' | 'preview'>('code');
