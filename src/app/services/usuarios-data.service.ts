import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosDataService {

  constructor(private httpClient: HttpClient) { }

  getUsersFromApi(): Observable<Users[]>{
    return this.httpClient.get<Users[]>(`${environment.baseURL}users`);
  }


}
