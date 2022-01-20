import { Usuario } from './usuario';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private userSubject = new BehaviorSubject<Usuario>({})

  constructor(
    private tokenService: TokenService
  ) {
    if (this.tokenService.haveToken()) {
      this.decodeJWT()
    }
  }

  private decodeJWT() {
    let token = this.tokenService.getToken();
    let user = jwt_decode(token) as Usuario

    this.userSubject.next(user)
  }

  returnUser() {
    return this.userSubject.asObservable()
  }

  saveToken(token: string) {
    this.tokenService.saveToken(token);
    this.decodeJWT()
  }

  logout() {
    this.tokenService.deleteToken()
    this.userSubject.next({})
  }

  isLogged() {
    return this.tokenService.haveToken()
  }
}
