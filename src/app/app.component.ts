import { Component, effect, ViewChild } from '@angular/core';
import initWs from "./helpers/initWs";
import tree from "./tree";
import {currentFile, ideState, theme} from "../state";
import openFile from "./helpers/openFile";
import darkenColor from "../utils/darkenColor";
import lightenColor from "../utils/lightenColor";

@Component({
  selector: 'app-root',
  template: `
    <app-nav></app-nav>
    <div class="grid grid-cols-12 grid-rows-6 ide bg-gray-200 grid-flow-col " [style.color]="theme().config.foreground" [style.background-color]="darkenColor(theme().config.background, 50)">
      <div #treeContainer [style.background-color]="lightenColor(theme().config.background, 20)" class="row-span-5 col-span-3 border-r border-gray-600 overflow-hidden">
        <app-tree [tree]="tree"></app-tree>
      </div>
      <div [style.background-color]="lightenColor(theme().config.background, 20)" class="row-span-1 col-span-3 border-r p-2 border-gray-600">
        <div class="p-2" [style.background-color]="lightenColor(theme().config.background, 10)">Settings</div>
      </div>
      <div class="row-span-4 col-span-6 overflow-auto relative" [style.background-color]="theme().config.background">
        <div class="sticky top-0 z-50 px-2 shadow-md" [style.background-color]="lightenColor(theme().config.background, 20)">
          <opened-files></opened-files>
        </div>
        <div #editor class="z-10"></div>
      </div>
      <div class="row-span-2 col-span-6 overflow-hidden" [style.background-color]="theme().config.background">
        <div class="p-1" [style.background-color]="lightenColor(theme().config.background, 20)">Terminal</div>
        <div #terminal class="px-1 terminal"></div>
      </div>
      <div class="row-span-6 col-span-3"  [style.background-color]="theme().config.background">
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
      const { terminal } = ideState();
      if (terminal) {
        terminal.element.querySelector('.xterm-viewport').style.background = theme().config.background;
      }
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
  protected readonly lightenColor = lightenColor;
}
