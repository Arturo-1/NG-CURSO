import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { alumno } from '../models/alumno.models';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  API_SERVER:string = environment.baseURL
  
 
  constructor(private http:HttpClient) { }

  getAlumnos():Observable<alumno[]>{
    console.log(this.API_SERVER)
    return this.http.get<alumno[]>(`${this.API_SERVER}/alumnos`);
  }
  deleteAlumno(id:any): Observable<any>{
    let rutaURL = `${this.API_SERVER}alumnos/${id}`  
    return this.http.delete<any>(rutaURL, id)
  }


}
