export interface Post {
  //Ficha de identificacion
    apellidoP: string;
    apellidoM: string;
    nombres: string;
    edad: string;
    sexo: string;
    estado: string;
    domicilio: string;
    sangre: string;
    nacimiento: string;
    lugar: string;
    seguro: string;
    telefono: string;

    //padecimiento actual
    padecimiento: string;
    peso: string;
    
    //antecedentes no patologicos
    vacuna: string;
    enfermedades: string;
    alimentacion: string;
    vivienda: string;

    //antecedentes patologicos
    diabetes: string;
    hipertension: string;
    respiratorias: string;
    alergias: string;
    cirugias: string;
  }
  