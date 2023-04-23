import { Component, Input } from '@angular/core';
import { theme } from "../../state";
import themes from "../themes";
import {Theme} from "../helpers/type";

@Component({
  selector: 'app-menu',
  template: `
    <!-- dropdown.component.html -->
    <div class="relative inline-block text-left">
      <div>
        <button type="button" (click)="toggleMenu()" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" id="options-menu" [attr.aria-expanded]="isExpanded ? 'true' : 'false'" [attr.aria-haspopup]="true">
          {{ label }}: {{theme().name}}
          <!-- Heroicon name: chevron-down -->
          <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>

      <div *ngIf="isExpanded" class="z-50 cursor-pointer origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" [attr.aria-orientation]="'vertical'" [attr.aria-labelledby]="menuId">
        <div class="py-1" role="none">
          <div *ngFor="let th of themes" (click)="setTheme(th); toggleMenu();" class="flex">
            <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">{{th.name}}</div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class MenuComponent {
  @Input() label: string = '';
  isExpanded = false;
  menuId = 'options-menu';

  toggleMenu(): void {
    this.isExpanded = !this.isExpanded;
  }

  setTheme(newTheme: Theme): void {
    theme.set(newTheme);
  }
  protected readonly themes = themes;
  protected readonly theme = theme;
}
