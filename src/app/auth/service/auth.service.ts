import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { mergeMap, Observable,tap } from 'rxjs';
import { LoginI } from 'src/app/models/login.interface';
import { User } from '../../models/users.module';

import { environment } from 'src/environments/environment';
import { ResponseI } from 'src/app/models/response.interface';
import { SessionService } from './session.service';
import { StringLiteralLike } from 'typescript';
import { UsersI, LoginSuccessFul, SingleUserResponse } from '../../models/user.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_SERVER:string = environment.baseURL
  API_SERVER_LOGIIN:string = environment.baseLogin
  
  constructor(
    private readonly httpClient: HttpClient,
    private readonly sessionService: SessionService

  ) {}
    getDataUsers(): Observable<LoginI[]> {
      return this.httpClient.get<LoginI[]>(`${environment.baseURL}/users`);
    }

    getData(){
      return this.httpClient.get('https://63c80da9e52516043f4a983c.mockapi.io/api/v1/users');
    }

    // ValidLogin(form:LoginI):Observable<ResponseI>{
    //   let ruta = 'https://63c80da9e52516043f4a983c.mockapi.io/api/v1/users'
    //   return this.httpClient.post<ResponseI>(ruta, form)
    // }

    login(data: {email:string, password:String}):Observable<User>{
      return this.httpClient
      .post<LoginSuccessFul>(`${this.API_SERVER_LOGIIN}/login`, data)
      .pipe(
        tap((data)=> localStorage.setItem('token', data.token)),
        mergeMap(() => this.httpClient.get<UsersI>(`${this.API_SERVER}/usuarios/1`)
        ),
        map(
          (data) => 
          new User(
            data.id,
            data.nombre,
            data.apellidos,
            data.correo,
            data.usuario,
            data.password,
            data.tipo_user
            )
        ), 
          tap((user) => this.sessionService.setUser(user))
      );
    
    }
}
