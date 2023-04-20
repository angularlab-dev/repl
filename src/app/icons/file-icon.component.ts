import { Component, Input } from '@angular/core';

@Component({
  selector: 'file-icon',
  template: `
    <img style="width: 20px; display: inline;" src="assets/{{type}}.png" />
  `,
})
export class FileIconComponent {
  @Input() type: string | undefined;
}
