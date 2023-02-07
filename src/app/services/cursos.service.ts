import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { BehaviorSubject, Observable } from 'rxjs';

import { ResponseI } from '../models/response.interface';
import { Curso } from '../models/curso';


@Injectable({
  providedIn: 'root'
})
export class CursosService {
  public dispCursoPrivate:BehaviorSubject<Curso> = new BehaviorSubject<Curso>({
    id: 1, 
    nombre:'prueba', 
    area:'prueba 2',
    codigo: 1,
    descripcion: 'prueba 4',
    tutor: 'prueba 5',
    fecha_Inicial: 'prueba 6',
    img: 'prueba 7',
    precio: 1})

   

  API_SERVER:string = environment.baseURL
  constructor(
    private http:HttpClient,
    ) {
  }
get CursoObserbable(){
  return this.dispCursoPrivate.asObservable();
}
set CursoObservableData(data:Curso){
  this.dispCursoPrivate.next(data)
}

  getCursos():Observable<Curso[]>{
    console.log(this.API_SERVER)
    return this.http.get<Curso[]>(`${this.API_SERVER}/cursos`);
  }

  // deleteCurso(id:number): Observable<void>{
  //   return this.http.delete<void>(`${this.API_SERVER}/cursos/?id=1`)
  
  // }
  deleteCurso(id:any): Observable<any>{

    console.log("llegue a service", id);
    let rutaURL = `${this.API_SERVER}cursos/${id}`  
    console.log("envio ruta:",rutaURL)  
    // let direccion = this.url + "estudiantes/" + estudianteid
    return this.http.delete<any>(rutaURL, id)
  }
  
}
