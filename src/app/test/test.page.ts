import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
//entrada
c: string;
c2: string; 
c3: string;
c4: string;
c5: string;
c6: string;
c7: string;
c8: string;
c9: string;
c10: string;
c11: string;
c12: string;
c13: string;
c14: string;
c15: string;
c16: string;
c17: string;
c18: string;
c19: string;
c20: string;
c21: string;
c22: string;
c23: string;
c24: string;



//salida
sc: string;
sc2: string; 
sc3: string;
sc4: string;
sc5: string;
sc6: string;
sc7: string;
sc8: string;
sc9: string;
sc10: string;
sc11: string;
sc12: string;
sc13: string;
sc14: string;
sc15: string;
sc16: string;
sc17: string;
sc18: string;
sc19: string;
sc20: string;
sc21: string;
sc22: string;
sc23: string;
sc24: string;


calif:number;
res: string;

DoEnviar()
{
  this.calif = 0;
  if(this.c == "c")
  {
    this.calif = this.calif + 1;
    this.sc = "Correcto";
  }
  else if(this.c == "a")
  {
    this.sc = "Incorrecto, es Fiebre, Tos y Sensacion de falta de aire";
  }
  else if(this.c == "b")
  {
    this.sc = "Incorrecto, es Fiebre, Tos y Sensacion de falta de aire";
  }
 

 
  if(this.c2 == "a")
  {
    this.calif = this.calif + 1;
    this.sc2 = "Correcto";
  }
  else if(this.c2 == "b")
  {
    this.sc2 = "Incorrecto, es Despues de 14 dias";
  }
  else if(this.c2 == "c")
  {
    this.sc2 = "Incorrecto, es Despues de 14 dias";
  }
  
  if(this.c3 == "c")
  {
    this.calif = this.calif + 1;
    this.sc3 = "Correcto";
  }
  else if(this.c3 == "a")
  {
    this.sc3 = "Incorrecto, es 2 semanas";
  }
  else if(this.c3 == "b")
  {
    this.sc3 = "Incorrecto, es 2 semanas";
  }

  

  if(this.c4 == "b")
  {
    this.calif = this.calif + 1;
    this.sc4 = "Correcto";
  }
  else if(this.c4 == "a")
  {
    this.sc4 = "Incorrecto, es A cualquier edad puedes infectarte";
  }
  else if(this.c4 == "c")
  {
    this.sc4 = "Incorrecto, es A cualquier edad puedes infectartes";
  }
 

  if(this.c5 == "c")
  {
    this.calif = this.calif + 1;
    this.sc5 = "Correcto";
  }
  else if(this.c5 == "b")
  {
    this.sc5 = "Incorrecto, es Mayores de 60 años";
  }
  else if(this.c5 == "a")
  {
    this.sc5 = "Incorrecto, es Mayores de 60 años";
  }
  

  if(this.c6 == "a")
  {
    this.calif = this.calif + 1;
    this.sc6 = "Correcto";
  }
  else if(this.c6 == "b")
  {
    this.sc6 = "Incorrecto, es con Secreciones respiratorias que generan con la tos";
  }
  else if(this.c6 == "c")
  {
    this.sc6 = "Incorrecto, es con Secreciones respiratorias que generan con la tos";
  }

  if(this.c7 == "b")
  {
    this.calif = this.calif + 1;
    this.sc7 = "Correcto";
  }
  else if(this.c7 == "a")
  {
    this.sc7 = "Incorrecto, No existe evidencia";
  }
 
 
  if(this.c8 == "c")
  {
    this.calif = this.calif + 1;
    this.sc8 = "Correcto";
  }
  else if(this.c8 == "a")
  {
    this.sc8 = "Incorrecto, No existe un antiviral especifico";
  }
 
  else if(this.c8 == "b")
  {
    this.sc8 = "Incorrecto, No existe un antiviral especifico";
  }

  if(this.c9 == "a")
  {
    this.calif = this.calif + 1;
    this.sc9 = "Correcto";
  }
  else if(this.c9 == "b")
  {
    this.sc9 = "Incorrecto, no existe";
  }
 
  else if(this.c9 == "c")
  {
    this.sc9 = "Incorrecto, no existe";
  }

  if(this.c10 == "b")
  {
    this.calif = this.calif + 1;
    this.sc10 = "Correcto";
  }
  else if(this.c10 == "a")
  {
    this.sc10 = "Incorrecto, no son eficaces";
  }
 
  else if(this.c10 == "c")
  {
    this.sc10 = "Incorrecto, no son eficaces ";
  }
  
  if(this.c11 == "1")
  {
    this.calif = this.calif + 1;
    this.sc11 = "Correcto";
  }
  else if(this.c11 == "b")
  {
    this.sc11 = "Incorrecto, es Higiene de manos, no contacto cercano con personas, uso de mascarilla";
  }
 
  else if(this.c11 == "c")
  {
    this.sc11 = "Incorrecto, es Higiene de manos, no contacto cercano con personas, uso de mascarilla ";
  }

  if(this.c12 == "c")
  {
    this.calif = this.calif + 1;
    this.sc12 = "Correcto";
  }
  else if(this.c12 == "a")
  {
    this.sc12 = "Incorrecto, es con un lavado de 1 minuto";
  }
 
  else if(this.c12 == "b")
  {
    this.sc12 = "Incorrecto,  es con un lavado de 1 minuto ";
  }

  if(this.c13 == "c")
  {
    this.calif = this.calif + 1;
    this.sc13 = "Correcto";
  }
  else if(this.c13 == "a")
  {
    this.sc13 = "Incorrecto, es por las condiciones asepsia";
  }
 
  else if(this.c13 == "b")
  {
    this.sc13 = "Incorrecto, es por las condiciones asepsia ";
  }


  if(this.c14 == "b")
  {
    this.calif = this.calif + 1;
    this.sc14 = "Correcto";
  }
  else if(this.c14 == "a")
  {
    this.sc14 = "Incorrecto, no son iguales";
  }
 
  else if(this.c14 == "c")
  {
    this.sc14 = "Incorrecto, no son iguales ";
  }

  if(this.c15 == "b")
  {
    this.calif = this.calif + 1;
    this.sc15 = "Correcto";
  }
  else if(this.c15 == "a")
  {
    this.sc15 = "Incorrecto, Solo por goticulas respiratorias";
  }
 
  else if(this.c15 == "c")
  {
    this.sc15 = "Incorrecto, Solo por goticulas respiratorias ";
  }

  if(this.c16 == "a")
  {
    this.calif = this.calif + 1;
    this.sc16 = "Correcto";
  }
  else if(this.c16 == "b")
  {
    this.sc16 = "Incorrecto, si debes usar mascarilla";
  }
 
  else if(this.c16 == "c")
  {
    this.sc16 = "Incorrecto, si debes usar mascarilla ";
  }


  if(this.c17 == "c")
  {
    this.calif = this.calif + 1;
    this.sc17 = "Correcto";
  }
  else if(this.c17 == "a")
  {
    this.sc17 = "Incorrecto, es dependiendo si no hay un riesgo evidente";
  }
 
  else if(this.c17 == "b")
  {
    this.sc17 = "Incorrecto, es dependiendo si no hay un riesgo evidente";
  }


  if(this.c18 == "b")
  {
    this.calif = this.calif + 1;
    this.sc18 = "Correcto";
  }
  else if(this.c18 == "a")
  {
    this.sc18 = "Incorrecto, no se recomienda";
  }
 
  


  if(this.c19 == "c")
  {
    this.calif = this.calif + 1;
    this.sc19 = "Correcto";
  }
  else if(this.c19 == "a")
  {
    this.sc19 = "Incorrecto, son 2 horas";
  }
 
  else if(this.c19 == "b")
  {
    this.sc19 = "Incorrecto, son 2 horas ";
  }


  if(this.c20 == "b")
  {
    this.calif = this.calif + 1;
    this.sc20 = "Correcto";
  }
  else if(this.c20 == "a")
  {
    this.sc20 = "Incorrecto, no es necesario utilizarlos";
  }
 
 

  if(this.c21 == "a")
  {
    this.calif = this.calif + 1;
    this.sc21 = "Correcto";
  }
  else if(this.c21 == "b")
  {
    this.sc21 = "Incorrecto, no es exacto su tiempo de vida";
  }
 
  else if(this.c21 == "c")
  {
    this.sc21 = "Incorrecto, no es exacto su tiempo de vida ";
  }


  if(this.c22 == "b")
  {
    this.calif = this.calif + 1;
    this.sc22 = "Correcto";
  }
  else if(this.c22 == "a")
  {
    this.sc22 = "Incorrecto, se debe tomar medidas de cuarenta sin presentarse nada";
  }
 
 


  if(this.c23 == "b")
  {
    this.calif = this.calif + 1;
    this.sc23 = "Correcto";
  }
  else if(this.c23 == "a")
  {
    this.sc23 = "Incorrecto, no hay riesgo";
  }
 
 


  if(this.c24 == "a")
  {
    this.calif = this.calif + 1;
    this.sc24 = "Correcto";
  }
  else if(this.c24 == "b")
  {
    this.sc24 = "Incorrecto, no se necesita botiquin para el virus";
  }








  
 
if(this.calif <= 0){
    this.res = "promedio del test" + " " + 0/24*10;
}
 else if(this.calif <= 1){
  this.res = " promedio del test" + " " + 1/24*10 ;
 } 
 else if(this.calif <= 2){
  this.res = " promedio del test" + " " + 2/24*10 ;
 } 
else if(this.calif <= 3){
  this.res = " promedio del test" + " " + 3/24*10 ;
} 
else if(this.calif <= 4){
  this.res = "promedio del test" + " " + 4/24*10 ;
} 
else if(this.calif <= 5){
  this.res = " promedio del test" + " " + 5/24*10 ;
} 
else if(this.calif <= 6){
  this.res = "promedio del test" + " " + 6/24*10 ;
} 
else if(this.calif <= 7){
  this.res = "promedio del test" + " " + 7/24*10 ;
 } 
else if(this.calif <= 8){
  this.res = "promedio del test" + " " + 8/24*10 ;
} 
else if(this.calif <= 9){
  this.res = " promedio del test" + " " + 9/24*10 ;
} 
else if(this.calif <= 10){
  this.res = " promedio del test" + " " + 10/24*10;
} 
else if(this.calif <= 11){
  this.res = "promedio del test" + " " + 11/24*10 ;
} 
else if(this.calif <= 12){
  this.res = "promedio del test" + " " + 12/24*10 ;
} 
else if(this.calif <= 13){
  this.res = " promedio del test" + " " + 13/24*10 ;
 } 
else if(this.calif <= 14){
  this.res = "promedio del test" + " " + 14/24*10 ;
} 
else if(this.calif <= 15){
  this.res = " promedio del test" + " " + 15/24*10;
} 
else if(this.calif <= 16){
  this.res = " promedio del test" + " " + 16/24*10 ;
} 
else if(this.calif <= 17){
  this.res = "promedio del test" + " " + 17/24*10 ;
} 
else if(this.calif <= 18){
  this.res = "promedio del test" + " " + 18/24*10 ;
} 
else if(this.calif <= 19){
  this.res = "promedio del test" + " " + 19/24*10 ;
 } 
else if(this.calif <= 20){
  this.res = "promedio del test" + " " + 20/24*10 ;
} 
else if(this.calif <= 21){
  this.res = " promedio del test" + " " + 21/24*10 ;
} 
else if(this.calif <= 22){
  this.res = " promedio del test" + " " + 22/24*10;
} 
else if(this.calif <= 23){
  this.res = " promedio del test" + " " + 23/24*10 ;
} 
else if(this.calif <= 24){
  this.res = " promedio del test" + " " + 24/24*10 ;
} 

}

}


