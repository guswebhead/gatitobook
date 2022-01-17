import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { minusculoValidator } from './minusculo.validator';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { UsuarioExisteService } from './usuario-existe.service';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newuserService: NovoUsuarioService,
    private userExistsService: UsuarioExisteService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.novoUsuarioForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: ['', [minusculoValidator], [this.userExistsService.userExists()]],
        password: [''],
      },
      {
        validators: [usuarioSenhaIguaisValidator]
      }
    )
  }

  register() {
    if(this.novoUsuarioForm.valid){
      let novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.newuserService.registerNewUser(novoUsuario).subscribe(
        ()=> {
          this.router.navigate([''])
        },
        (error)=>{
          alert(error.message)
        }
      )
    }
  }
}
