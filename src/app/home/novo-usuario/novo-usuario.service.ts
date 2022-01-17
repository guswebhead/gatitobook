import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  registerNewUser(novoUsuario: NovoUsuario) {
    return this.http.post('http://localhost:3000/user/signup', novoUsuario)
  }

  checkUserExists(nameUser: string) {
    return this.http.get('http://localhost:3000/user/exists/' + nameUser)
  }
}
