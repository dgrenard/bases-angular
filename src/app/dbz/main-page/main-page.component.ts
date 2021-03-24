import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
 
  // personajes:string[] = ['Krilin-700','Goku-1500','Vegeta-800'];
 personajes:Personaje []= [
   {
      nombre:'Goku',
      poder: 15000
   },
   {  
     nombre:'Vegeta',   
     poder: 7500           
   }
];
  nuevo:Personaje ={
     nombre:'Maestro Roshi',
     poder: 1000
  }
  agregarNuevoPersonaje(argumento:Personaje){
    this.personajes.push(argumento);
  }
  /*agregar( event:any){ metodo clasico con Javascypt
    event.preventDefault();
    console.log(event);
  } */
}
