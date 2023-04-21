import { Component, effect, ViewChild } from '@angular/core';
import initWs from "./helpers/initWs";
import tree from "./tree";
import { currentFile } from "../state";
import openFile from "./helpers/openFile";

@Component({
  selector: 'app-root',
  template: `
    <app-nav></app-nav>
    <div class="grid grid-rows-4 grid-cols-12 grid-flow-col gap-2 h-[780px] dark:bg-zinc-900 dark:text-gray-200">
      <div class="row-span-4 col-span-3 h-full overflow-scroll bg-zinc-800 border-r border-gray-600">
        <app-tree [tree]="tree"></app-tree>
      </div>
      <div class="row-span-3 col-span-6">
        <opened-files></opened-files>
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
  tree: any = tree;
  constructor() {
    effect(() => {
      const cf = currentFile();
      openFile(cf).then();
    });
  }


  async ngAfterViewInit() {
    initWs({
      editorEl: this.editorDiv.nativeElement,
      iframeEl: this.iframeEl.nativeElement,
      terminalEl: this.terminalEl.nativeElement,
      tree,
    });
  }

  protected readonly currentFile = currentFile;
}
