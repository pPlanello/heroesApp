import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${environment.baseUrl}/${environment.endpoints.heroes}`);
  }
}
