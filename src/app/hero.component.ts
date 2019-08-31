import { Component } from '@angular/core';

@Component({
  template: `
    <h1>
      Hero page
    </h1>
    <button [routerLink]="['/heroes']">Back to list</button>
  `
})
export class HeroComponent {
}
