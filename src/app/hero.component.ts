import { Component } from '@angular/core';
import { HeroService } from './services/hero.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
    <h1 id="superhero" *ngIf="hero$ | async as hero">
      Hero {{ hero.name }}!!
    </h1>
    <button id="back-to-listing" [routerLink]="['/heroes']">Back to list</button>
  `
})
export class HeroComponent {
  hero$: Observable<{ id: number, name: string }>;

  constructor(service: HeroService, route: ActivatedRoute) {
    const id = Number(route.snapshot.params.id);
    this.hero$ = service.getHero(id);
  }
}
