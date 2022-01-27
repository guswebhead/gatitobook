import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-animal',
  templateUrl: './novo-animal.component.html',
  styleUrls: ['./novo-animal.component.css']
})
export class NovoAnimalComponent implements OnInit {

  formAnimal!: FormGroup;
  file!: File;
  preview!: string;
  percentConcluido = 0;

  constructor() { }

  ngOnInit(): void {
  }

  upload() {

  }

  holdArchive(file:any) {

  }

}
