import { Component } from '@angular/core';
import { theme } from '../../state';
import darkenColor from "../../utils/darkenColor";
import lightenColor from "../../utils/lightenColor";

@Component({
  selector: 'app-nav',
  template: `
<nav [style.background-color]="lightenColor(theme().config.background, 20)" class="sticky w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class="flex flex-wrap items-center justify-between mx-auto p-1">
    <a href="https://flowbite.com/" class="flex items-center">
      <img src="assets/logo.png" class="h-12 mr-3" alt="Flowbite Logo">
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">lab</span>
    </a>
    <div class="flex md:order-2 gap-3">
      <app-menu label="theme"></app-menu>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-primary dark:hover:bg-purePrimary dark:focus:ring-blue-800">
        Save progress
      </button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-zinc-800 md:dark:bg-zinc-900 dark:border-zinc-700">
        <li>

        </li>
      </ul>
    </div>
  </div>
</nav>
  `
})
export class NavigationComponent {
  protected readonly theme = theme;
  protected readonly darkenColor = darkenColor;
  protected readonly lightenColor = lightenColor;
}
