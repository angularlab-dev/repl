import {Component, effect, Input} from '@angular/core';
import getFileType from "../helpers/getFileType";
import {currentFile, openedFiles} from "../../state";
import {IdeFile} from "../../state.types";

@Component({
  selector: 'opened-files',
  template: `
    <nav class="flex space-x-8" aria-label="Tabs">
      <div *ngFor="let file of openedFiles()" (click)="currentFile.set(file)" class="flex">
        <div class="{{ currentFile()?.path === file.path ? 'border-b-4 border-primary cursor-pointer': 'border-transparent text-gray-300 hover:text-gray-50'}}">
          <file-icon [type]="getFileType(file.name)"></file-icon>
          <span
            class="cursor-pointer group inline-flex items-center py-2 px-1 text-sm font-medium">
                {{file.name}}
                </span>
          <span (click)="closeFile(file)">x</span>
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
}
