import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../shared/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth: Auth | undefined;

  get auth(): Auth {
    return { ... this._auth! };
  }

  constructor(private http: HttpClient) { }

  login(): Observable<Auth> {
    return this.http.get<Auth>(`${environment.baseUrl}/${environment.endpoints.users}/1`)
      .pipe(
        tap(auth => {
          console.log(auth)
          localStorage.setItem('token', auth.id)
          this._auth = auth
        }) // antes de devolverlo pasa por este metodo
      );
  }

  logout() {
    localStorage.setItem('token', '')
    this._auth = undefined;
  }
}
