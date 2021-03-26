import { Component, Input, OnInit } from '@angular/core';
import {DbzService} from '../services/dbz.service';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent  {
  constructor( private dbzService: DbzService){}
  /*El @input sirve para importar propiedades del componente 
  padre y en este caso para importar la propiedad personajes 
  del padre al array en el componente hijo, a la hora de llamar 
  el componente en el padre se usa [data]="personajes" 
  (linea 5 main-page.component.hml) en la etiqueta y se le 
  llama cómo data porque así se l nombra en los parentesis del @input,
  si quitara esto, sedeberia llamar en el html la propiedad por el nombre 
  original [personajes]="personajes"*/
  //@Input('data') personajes:any[] = [];
  get personajes(){
    return this.dbzService.personajes;
  } 
}
