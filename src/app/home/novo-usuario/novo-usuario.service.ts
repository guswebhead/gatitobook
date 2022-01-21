import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.api
@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  registerNewUser(novoUsuario: NovoUsuario) {
    return this.http.post(API + '/user/signup', novoUsuario)
  }

  checkUserExists(nameUser: string) {
    return this.http.get(API + '/user/exists/' + nameUser)
  }
}
