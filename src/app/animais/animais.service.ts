import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { TokenService } from './../autenticacao/token.service';
import { Animais } from './animais';

const API = environment.api
@Injectable({
  providedIn: 'root'
})
export class AnimaisService {



  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  listUser(nameUser: string): Observable<Animais> {
    const token = this.tokenService.getToken()
    const headers = new HttpHeaders().append('x-access-token', token)
    return this.http.get<Animais>(API + '/' + nameUser + '/photos', {headers})
  }
}
