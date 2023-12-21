import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';

const baseUrl =  AppSettings.API_ENDPOINT + "/util";


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  listarCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(baseUrl + '/listarCategorias');
  }

}
