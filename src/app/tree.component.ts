import { Component, Input } from '@angular/core';
import getFileType from "./helpers/getFileType";

@Component({
  selector: 'app-tree',
  template: `
    <ul *ngIf="tree" style="padding-left: 20px">
      <li *ngFor="let dir of directories" (click)="onFileOrDirClick(dir)">
        <folder-icon></folder-icon>
        {{ dir.name }}
        <ng-container>
          <app-tree [tree]="dir['directory']" [path]="dir['path']" [onFileOrDirClick]="onFileOrDirClick" [currentFilePath]="currentFilePath"></app-tree>
        </ng-container>
      </li>
      <li *ngFor="let file of files" (click)="onFileOrDirClick(file)" class="{{file.path === currentFilePath ? 'text-red-500 border-b-2 border-primary cursor-pointer': ''}}">
        <file-icon type="{{getFileType(file.name)}}"></file-icon>
        {{ file.path }}
      </li>
    </ul>
  `,
})
export class TreeComponent {
  @Input() tree: any[] | undefined;
  @Input() path: string = '.';
  @Input() currentFilePath?: string = '';
  @Input() onFileOrDirClick: any;
  directories: any [] = [];
  files: any[] = [];
  ngOnInit() {
    if (this.tree) {
      Object
        .keys(this.tree)
        .forEach((key) => {
          // @ts-ignore
          const fileOrTree = this.tree[key];
          const fileOrTreeWithName = { ...fileOrTree, name: key, path: `${this.path}/${key}` };
          if (fileOrTree['file']) {
            this.files.push(fileOrTreeWithName);
          } else {
            this.directories.push(fileOrTreeWithName);
          }
          // @ts-ignore
          const sortFunc = ({name: name1}, {name: name2}) => {
            if (name1.toLowerCase() > name2.toLowerCase()) {
              return 1;
            }
            if (name1.toLowerCase() < name2.toLowerCase()) {
              return -1;
            }
            return 0;
          };
          this.files = this.files.sort((sortFunc));
          this.directories = this.directories.sort((sortFunc));
        });
    }
  }

  protected readonly getFileType = getFileType;
}
