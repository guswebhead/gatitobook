import { ComentariosService } from './comentarios.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, switchMap, tap } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Comentarios } from './comentarios';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  @Input() id!: number

  comentarios$!: Observable<Comentarios>
  comentarioForm!: FormGroup;


  constructor(
    private comentarioService: ComentariosService,
    private formBuild: FormBuilder
  ) { }

  ngOnInit(): void {
    this.comentarios$ = this.comentarioService.searchComment(this.id);
    this.comentarioForm = this.formBuild.group({
      comentario: ['', Validators.maxLength(300)]
    })
  }


  gravar() {
    const comentario = this.comentarioForm.get('comentario')?.value ?? '';
    this.comentarios$ = this.comentarioService.includeComment(this.id, comentario).pipe(
      switchMap(() => this.comentarioService.searchComment(this.id)),
      tap(
        ()=>{
          this.comentarioForm.reset();
          alert('Comentario Salvo')
        }
      )
    )
  }
}
