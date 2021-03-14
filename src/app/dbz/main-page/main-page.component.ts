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
  
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  agregar(){
    if ( this.nuevo.nombre.trim().length === 0 ){
      return;
    }
     this.personajes.push(this.nuevo); //Forma de agregar un valor a un array
     this.nuevo = {
       nombre:'',
       poder: 0
     };
  }

  /*agregar( event:any){ metodo clasico con Javascypt
    event.preventDefault();
    console.log(event);
  } */
}
