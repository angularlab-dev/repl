import {Component} from '@angular/core';
import getFileType from "../helpers/getFileType";
import {currentFile, openedFiles, theme} from "../../state";
import {IdeFile} from "../../state.types";
import lightenColor from "../../utils/lightenColor";
import isFileOpen from "../helpers/isFileOpen";

@Component({
  selector: 'opened-files',
  template: `
    <nav class="flex" aria-label="Tabs">
      <div
        *ngFor="let file of openedFiles()"
        (click)="currentFile.set(file)"
        class="px-2 {{ isFileOpen(file) ? 'border-b-2 border-active cursor-pointer shadow-xl': 'border-transparent'}}"
        [style.background-color]="isFileOpen(file) ? lightenColor(theme().config.background, 40) : lightenColor(theme().config.background, 20)"
      >
        <div>
          <file-icon [type]="getFileType(file.name)"></file-icon>
          <span
            class="cursor-pointer group inline-flex items-center py-2 px-1 text-sm font-medium">
                {{file.name}}
                </span>
          <span (click)="closeFile(file)"><close-icon></close-icon></span>
        </div>
      </div>
    </nav>
  `
})
export class OpenedFilesComponent {
  closeFile (file: IdeFile) {
    openedFiles.mutate((val) => {
      const index = val.findIndex((elm) => elm.path === file.path);
      val.splice(index, 1);
      if (val.length) {
        const nextFileIndex = index === 0 ? 0 : index - 1;
        currentFile.set(val[nextFileIndex]);
      } else {
        currentFile.set(null);
      }
    });
  }
  protected readonly getFileType = getFileType;
  protected readonly openedFiles = openedFiles;
  protected readonly currentFile = currentFile;
  protected readonly isFileOpen = isFileOpen;
  protected readonly lightenColor = lightenColor;
  protected readonly theme = theme;
}
