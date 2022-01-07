import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../models/heroe.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Array<Heroe>> {
    return this.http.get<Array<Heroe>>(`${environment.baseUrl}/${environment.endpoints.heroes}`);
  }

  getHeroeById(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${environment.baseUrl}/${environment.endpoints.heroes}/${id}`)
  }

  getHeroesSuggestions(name: string, limit: number = 10): Observable<Array<Heroe>> {
    return this.http.get<Array<Heroe>>(`${environment.baseUrl}/${environment.endpoints.heroes}?q=${name}&limit=${limit}`);
  }
}
