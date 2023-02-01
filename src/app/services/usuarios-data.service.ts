import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/user.interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuariosDataService {

  API_SERVER:string = environment.baseURL
  constructor(private httpClient: HttpClient) {

   }
  
  // getUsersFromApi(): Observable<Users[]>{
  //   return this.httpClient.get<Users[]>(`${environment.baseURL}users`);
  // }

  getUsuarios():Observable<Users[]>{
    console.log(this.API_SERVER)
    return this.httpClient.get<Users[]>(`${this.API_SERVER}/usuarios`);
  }


}
