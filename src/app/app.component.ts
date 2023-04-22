import { Component, effect, ViewChild } from '@angular/core';
import initWs from "./helpers/initWs";
import tree from "./tree";
import {currentFile, theme} from "../state";
import openFile from "./helpers/openFile";
import darkenColor from "../utils/darkenColor";

@Component({
  selector: 'app-root',
  template: `
    <app-nav></app-nav>
    <div class="grid grid-cols-12 grid-rows-6 ide bg-gray-200 grid-flow-col gap-2 p-2" [style.color]="theme().config.foreground" [style.background-color]="darkenColor(theme().config.background, 30)">
      <div #treeContainer [style.background-color]="theme().config.background" class="row-span-5 col-span-3 border-r border-gray-600 rounded-lg overflow-hidden">
        <app-tree [tree]="tree"></app-tree>
      </div>
      <div [style.background-color]="theme().config.background" class="row-span-1 col-span-3 border-r p-2 rounded-lg border-gray-600">
        <h2 class="text-lg font-medium">Settings</h2>
      </div>
      <div class="row-span-4 col-span-6 rounded-lg overflow-auto relative" [style.background-color]="theme().config.background">
        <div class="sticky top-0 z-50 px-2 shadow-md" [style.background-color]="theme().config.background">
          <opened-files></opened-files>
        </div>
        <div #editor class="z-10"></div>
      </div>
      <div #terminal style="background: #000000" class="row-span-2 col-span-6 overflow-hidden rounded-lg p-2 terminal"></div>
      <div class="row-span-6 col-span-3 rounded-lg"  [style.background-color]="theme().config.background">
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
  @ViewChild('treeContainer') treeContainer: any;
  title = 'lab';
  tree: any = tree;
  constructor() {
    effect(() => {
      theme();
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
  protected readonly theme = theme;
  protected readonly darkenColor = darkenColor;
}
