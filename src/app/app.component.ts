import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Foruth';
  model: NgbDateStruct;
    registro: FormGroup;
    submitted = false;
  
  constructor(private formBuilder: FormBuilder) { }
  
     ngOnInit() {
         this.registro = this.formBuilder.group({
             foto: ['', Validators.required],
             nombre: ['', Validators.required],
             apellido: ['', Validators.required],
             fecha: ['', Validators.required],
             tipoi: ['', Validators.required],
             numeroi: ['', Validators.required],
             estado: ['', Validators.required],
             firma: ['', Validators.required]
         });
     }
  
     get f() { return this.registro.controls; }
  
     onSubmit() {
         this.submitted = true;
  
         if (this.registro.invalid) {
             return;
         }
  
         alert('Mensaje Enviado !')
     }
 }
