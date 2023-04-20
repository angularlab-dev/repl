import { Component, ViewChild } from '@angular/core';
import WebIde from "./web-ide";
import tree from "./tree";
import getFileType, { fileTypes } from "./helpers/getFileType";
import { WebIdeApi } from "./web-ide/type";

@Component({
  selector: 'app-root',
  template: `
    <app-nav></app-nav>
    <div class="grid grid-rows-4 grid-cols-12 grid-flow-col gap-2 h-[780px] dark:bg-zinc-900 dark:text-gray-200">
      <div class="row-span-4 col-span-3 h-full overflow-scroll bg-zinc-800 border-r border-gray-600">
        <app-tree [tree]="tree" [onFileOrDirClick]="onFileOrDirClicked" [currentFilePath]="currentFilePath"></app-tree>
      </div>
      <div class="row-span-3 col-span-6">
        <opened-files [openedFiles]="openedFiles" [closeFile]="closeFile" [setCurrentFile]="setCurrentFile" [currentFilePath]="currentFilePath"></opened-files>
        <div #editor class="h-full overflow-scroll"></div>
      </div>
      <div #terminal style="background: #000000" class="col-span-6 terminal"></div>
      <div class="row-span-4 col-span-3  bg-gray-50 ">
        <iframe #iframe style="height: 100%; width: 100%"></iframe>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('editor') editorDiv: any;
  @ViewChild('iframe') iframeEl: any;
  @ViewChild('terminal') terminalEl: any;
  title = 'lab';
  ide: WebIdeApi | undefined;
  currentFilePath: string | undefined;
  tree: any = tree;
  openedFiles: any[] = [];

  getFileType(name: string): typeof fileTypes[number] {
    return getFileType(name);
  }
  async setCurrentFile(file: any) {
    if (this.ide) {
      const { containerInstance } = this.ide?.getState();
      this.ide?.editor.setContent(await containerInstance.fs.readFile(file.path, 'utf-8'));
      this.currentFilePath = file.path;
    }
  }
  async ngAfterViewInit() {
    this.ide = WebIde({
      editorEl: this.editorDiv.nativeElement,
      iframeEl: this.iframeEl.nativeElement,
      terminalEl: this.terminalEl.nativeElement,
      tree,
      editorOptions: {
        defaultContent: '',
        onContentChange: this.onEditorContentChange,
      },
    });
    this.ide.editor.init();
    await this.ide.ws.start();
  }
  async ngOnInit() {

  }
  onEditorContentChange = async (content: string = '') => {
    await this.ide?.ws.writeFile(`${this.currentFilePath}`, content);
  }
  onFileOrDirClicked = async (fileOrDir: any) => {
    if (!!this.ide && fileOrDir['file']) {
      this.openFile(fileOrDir);
      await this.setCurrentFile(fileOrDir);
    }
  }
  openFile(file: any) {
    this.openedFiles.push(file);
  }
  closeFile(file: any) {
    this.openedFiles = this.openedFiles.filter((f) => f.path !== file.path);
  }
}
