import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()

export class DbzService{

  private _personajes:Personaje []= [
    {
       nombre:'Goku',
       poder: 15000
    },
    {  
      nombre:'Vegeta',   
      poder: 7500           
    }
 ];
 /*Como Javascrypt trabaja con referencias, para evitar que pueda ser 
 manippulado desde afuera, se pone el this.personajes en llaves cuadradas 
 [...] y los tres puntos usando el operador spread que sirve para pasar un 
 gran numero de datos de forma más especifica, sin tener que declara por 
 ejemplo en una banderilla, todo lo que está en un arreglo*/
 get personajes():Personaje[]{
   return [...this._personajes];
 }
 constructor(){}

 agregarPersonaje(personaje: Personaje){
    this._personajes.push(personaje);
 }
}