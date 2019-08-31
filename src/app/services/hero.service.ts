import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes = [
    {
      id: 1,
      name: 'Superman'
    },
    {
      id: 2,
      name: 'Batman'
    }
  ];

  getHeroes(): Observable<{ id: number, name: string }[]> {
    return of(this.heroes);
  }

  getHero(id: number): Observable<{ id: number, name: string }> {
    return of(this.heroes.find(h => h.id === id));
  }
}
