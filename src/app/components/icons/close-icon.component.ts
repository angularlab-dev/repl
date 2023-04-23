import { Component } from '@angular/core';

@Component({
  selector: 'close-icon',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 inline" viewBox="0 0 20 20" fill="currentColor">
      <path
        fill-rule="evenodd"
        d="M12.34 10.002l6.29-6.29a.999.999 0 10-1.41-1.41L10.93 8.592 4.64 2.302a.999.999 0 10-1.41 1.41l6.29 6.29-6.29 6.29a.999.999 0 101.41 1.41l6.29-6.29 6.29 6.29a.999.999 0 101.41-1.41l-6.29-6.29z"
        clip-rule="evenodd"
      />
    </svg>
  `,
})
export class CloseIconComponent {}
