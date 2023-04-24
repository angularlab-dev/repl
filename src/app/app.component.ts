import { Component, effect, ViewChild } from '@angular/core';
import initWs from "./helpers/initWs";
import tree from "./tree";
import {currentFile, devToolsView, ideState, mode, theme} from "../state";
import openFile from "./helpers/openFile";
import lightenColor from "../utils/lightenColor";
import isFileOpen from "./helpers/isFileOpen";

@Component({
  selector: 'app-root',
  template: `
    <app-nav></app-nav>
    <div class="grid grid-cols-12 grid-rows-6 ide bg-gray-200 grid-flow-col {{theme().config.dark ? 'text-gray-200' : 'text-gray-700' }}" >
      <div #treeContainer [style.background-color]="bg__light20" class="row-span-5 col-span-3 border-r border-gray-600 overflow-hidden">
        <app-tree [tree]="tree"></app-tree>
      </div>
      <div [style.background-color]="bg__light20" class="row-span-1 col-span-3 border-r p-2 border-gray-600">
        <div class="p-2" [style.background-color]="bg__light10">Settings</div>
      </div>

      <div class="row-span-4 col-span-9 overflow-auto relative" [style.background-color]="bg">
        <div class="sticky top-0 z-10 shadow-md" [style.background-color]="bg__light20">
          <div class="flex">
            <div>
              <opened-files></opened-files>
            </div>
            <div (click)="mode.set('preview')"
                 class="flex p-2 cursor-pointer ml-auto {{ mode() === 'preview' ? 'border-b-2 border-active shadow-xl': 'border-transparent'}}"
            >
              preview
            </div>
          </div>
        </div>
        <div [style.display]="mode() === 'preview' ? 'block': 'none'" class="w-full h-full bg-white">
          <iframe #iframe style="height: 95%; width: 100%"></iframe>
        </div>
        <div #editor class="z-10" [style.display]="mode() === 'code' ? 'block': 'none'"></div>
      </div>
      <div class="row-span-2 col-span-9 overflow-hidden" [style.background-color]="bg">
        <div class="shadow-xl" [style.background-color]="bg__light20">
          <div class="container mx-auto">
            <div class="flex items-center justify-start shadow-2xl">
              <button
                (click)="devToolsView.set('output')"
                class="w-24 relative px-1 py-1 focus:outline-none border-b {{devToolsView() === 'output' ? 'border-active' : 'border-transparent'}}">
                Output
              </button>
              <button
                (click)="devToolsView.set('terminal')"
                class="w-24 relative px-1 py-1 focus:outline-none border-b {{devToolsView() === 'terminal' ? 'border-active' : 'border-transparent'}}">
                Terminal
              </button>
            </div>
          </div>
        </div>

        <div #terminal class="px-1 terminal" [style.display]="devToolsView() === 'terminal' ? 'block': 'none'"></div>
        <div #output class="px-1 terminal" [style.display]="devToolsView() === 'output' ? 'block': 'none'"></div>
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
  @ViewChild('output') outputEl: any;
  @ViewChild('treeContainer') treeContainer: any;
  title = 'lab';
  tree: any = tree;
  fg = theme().config.foreground;
  bg = theme().config.background;
  bg__light10 = lightenColor(theme().config.background, 10);
  bg__light20 = lightenColor(theme().config.background, 20);
  constructor() {
    effect(() => {
      const { config: {background, foreground}} = theme();
      this.fg = foreground;
      this.bg = background;
      this.bg__light10 = lightenColor(background, 10);
      this.bg__light20 = lightenColor(background, 20);

      const { terminal, output } = ideState();
      if (terminal) {
        terminal.element.querySelector('.xterm-viewport').style.background = background;
        output.element.querySelector('.xterm-viewport').style.background = background;
      }
      const cf = currentFile();
      if (cf) {
        mode.set('code');
        openFile(cf).then();
      }
    }, { allowSignalWrites: true });
  }


  async ngAfterViewInit() {
    initWs({
      editorEl: this.editorDiv.nativeElement,
      iframeEl: this.iframeEl.nativeElement,
      terminalEl: this.terminalEl.nativeElement,
      outputEl: this.outputEl.nativeElement,
      tree,
    });
  }

  protected readonly mode = mode;
  protected readonly devToolsView = devToolsView;
  protected readonly isFileOpen = isFileOpen;
  protected readonly theme = theme;
}
