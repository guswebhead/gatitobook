import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MensagemComponent } from './../componentes/mensagem/mensagem.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MensagemModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
