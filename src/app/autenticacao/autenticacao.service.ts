import { environment } from 'src/environments/environment';
import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable, tap } from 'rxjs';

const API = environment.api
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(
    private httpClient: HttpClient,
    private userService: UsuarioService
  ) { }

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient.post(API + '/user/login', {
      userName: usuario,
      password: senha
    },
      { observe: 'response' }
    ).pipe(
      tap((res) => {
        let authToken = res.headers.get('x-access-token') ?? '';
        this.userService.saveToken(authToken)
      })
    )
  }
}
