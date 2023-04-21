import { signal } from "@angular/core";
import { IdeFile, IdeTree } from "./state.types";
import { IdeState } from "./app/helpers/type";

export const openedFiles = signal<IdeFile[]>([]);

export const ideTree = signal<IdeTree | null>(null)

export const currentFile = signal<IdeFile | null>(null);

export const ideState = signal<IdeState>({
  editor: null,
  vm: null,
  terminal: null,
});
