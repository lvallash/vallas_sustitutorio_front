import { Categoria } from "./categoria.model";

export class Docente {
    iddocente?:number;
    nombre?:string;
    dni?:string;
    fechanacimiento?:string;
    sueldo?:number;
    sexo?:string; 
    
    categoria?:Categoria;
  
}
