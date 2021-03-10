import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template:`
   <h1>{{title}}</h1>

  <span>La base es:  {{base}}</span>
  
  <div class="contador-uno">
    <button (click)="acumular(-1)">-1</button>
    <span>{{numero}}</span>
    <button (click)="acumular(1)">+1</button>
  </div>
  
  <div class="contador-dos">
    <button (click)="acumularCinco(-base)">- {{base}}</button>
    <span>{{segundoNumero}}</span>
    <button (click)="acumularCinco(base)">+ {{base}}</button>
  </div>
  `
})
export class ContadorComponent {
  title = 'Contador app';
  numero: number = 0;
  segundoNumero:number = 0;
  base: number = 5;
  
 acumular(valor:number){
   this.numero += valor;
   if (this.numero < 0){
      this.numero = 0;
   }
 }
 acumularCinco(base:number){
   this.segundoNumero += base;
   if (this.numero < 0){
    this.numero = 0;
 }
  }
}
