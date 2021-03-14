import { Component, OnInit } from '@angular/core';

interface Personaje{
 nombre: string;
 poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
 
  // personajes:string[] = ['Krilin-700','Goku-1500','Vegeta-800'];
  constructor() { }

  ngOnInit(): void {
  }

  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 14000
  }
  agregar(){
    console.log(this.nuevo);
  }

  /*agregar( event:any){ metodo clasico con Javascypt
    event.preventDefault();
    console.log(event);
  } */
}
