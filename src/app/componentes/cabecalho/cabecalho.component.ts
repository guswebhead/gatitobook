import { Router } from '@angular/router';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {

  user$ = this.userService.returnUser();


  constructor(
    private userService: UsuarioService,
    private router: Router
  ) { }


  logout(){
    this.userService.logout()
    this.router.navigate([''])
  }

}
