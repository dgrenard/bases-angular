import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
 
  constructor( ){ }
  // personajes:string[] = ['Krilin-700','Goku-1500','Vegeta-800'];
  //Forma de traerse los datos por medio de un get.
  /* get personajes():Personaje[]{
        return this.dbzService.personajes;
  } */
  
  nuevo:Personaje ={
     nombre:'Maestro Roshi',
     poder: 1000
  }
  /*agregar( event:any){ metodo clasico con Javascypt
    event.preventDefault();
    console.log(event);
  } */
}
