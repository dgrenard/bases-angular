import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {
  heroeBorrado: string = '';
  heroes:string [] = ['Spiderman','Ironman','Hulk','Thor','Capitan America']; 
borrarHeroe(){
  this.heroeBorrado = this.heroes.shift() || '';
 }
}
