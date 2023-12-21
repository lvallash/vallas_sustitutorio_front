import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Docente } from '../models/docente.model';
import { AppSettings } from '../app.settings';

const baseUrl =  AppSettings.API_ENDPOINT + "/docente";

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private http:HttpClient) { }

  consultarPorNombre(filtro:string):Observable<Docente[]>{
    return  this.http.get<Docente[]>(baseUrl +"/listarDocente/"+ filtro); 
}  

insertar(obj:Docente):Observable<any>{
    return this.http.post(baseUrl +"/registrarDocente", obj);
}

actualizar(obj:Docente):Observable<any>{
    return this.http.put(baseUrl + "/actualizarDocente", obj);
}

eliminar(idDocente:number):Observable<any>{
    return this.http.delete(baseUrl + "/eliminaDocente/"+ idDocente);
}


}
