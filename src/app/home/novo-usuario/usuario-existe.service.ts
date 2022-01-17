import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

import { NovoUsuarioService } from './novo-usuario.service';
import { first, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioService: NovoUsuarioService) { }

  userExists() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) => this.novoUsuarioService.checkUserExists(nomeUsuario)),
        map((usuarioExiste) => (usuarioExiste ? { usuarioExistente: true } : null)),
        first()
      )
    }
  }
}
