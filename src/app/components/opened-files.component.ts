import {Component, Input} from '@angular/core';
import getFileType from "../helpers/getFileType";

@Component({
  selector: 'opened-files',
  template: `
    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
      <div *ngFor="let file of openedFiles" (click)="setCurrentFile(file)" class="flex">
        <div class="{{ currentFilePath === file.path ? 'border-b-4 border-primary cursor-pointer': 'border-transparent text-gray-300 hover:text-gray-50'}}">
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
  @Input() openedFiles: any[] | undefined;
  @Input() setCurrentFile: any;
  @Input() closeFile: any;
  @Input() currentFilePath: string | undefined;

  protected readonly getFileType = getFileType;
}
