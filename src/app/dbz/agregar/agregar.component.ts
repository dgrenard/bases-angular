import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent{

    @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  //Forma de emitir inforación de un componente hijo a un padre
    @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  agregar(){
    if ( this.nuevo.nombre.trim().length === 0 ){
      return;
    }
    //Así se emite la propiedad nuevo de tipo personaje
    this.onNuevoPersonaje.emit( this.nuevo );
     //this.personajes.push(this.nuevo); //Forma de agregar un valor a un array
     this.nuevo = {
       nombre:'',
       poder: 0
     };
  }
}
