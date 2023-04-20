import { Component, ViewChild } from '@angular/core';
import WebIde from "./web-ide";
import tree from "./tree";
import getFileType, { fileTypes } from "./helpers/getFileType";
import { WebIdeApi } from "./web-ide/type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('editor') editorDiv: any;
  @ViewChild('iframe') iframeEl: any;
  @ViewChild('terminal') terminalEl: any;
  title = 'lab';
  ide: WebIdeApi | undefined;
  currentFilePath: string | undefined;
  files: any = Object.keys(tree);
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
