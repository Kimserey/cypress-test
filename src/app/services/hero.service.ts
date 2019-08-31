import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // heroes = [
  //   {
  //     id: 1,
  //     name: 'Superman'
  //   },
  //   {
  //     id: 2,
  //     name: 'Batman'
  //   }
  // ];

  // getHeroes(): Observable<{ id: number, name: string }[]> {
  //   return of(this.heroes);
  // }

  // getHero(id: number): Observable<{ id: number, name: string }> {
  //   return of(this.heroes.find(h => h.id === id));
  // }

  getHeroes(): Observable<{ id: number, name: string }[]> {
    return this.http.get<{ id: number, name: string }[]>('http://localhost:5000/heroes');
  }

  getHero(id: number): Observable<{ id: number, name: string }> {
    return this.http.get<{ id: number, name: string }>(`http://localhost:5000/heroes/${id}`);
  }

  constructor(private http: HttpClient) {}
}
