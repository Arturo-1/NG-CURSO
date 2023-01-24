import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginI } from 'src/app/models/login.interface';
import { Users } from '../../models/users.module';
import { environment } from 'src/environments/environment';
import { ResponseI } from 'src/app/models/response.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
    private readonly httpClient: HttpClient
  ) {}
    getDataUsers(): Observable<LoginI[]> {
      return this.httpClient.get<LoginI[]>(`${environment.baseURL}/users`);
    }

    getData(){
      return this.httpClient.get('https://63c80da9e52516043f4a983c.mockapi.io/api/v1/users');
    }

    ValidLogin(form:LoginI):Observable<ResponseI>{
      let ruta = 'https://63c80da9e52516043f4a983c.mockapi.io/api/v1/users'
      return this.httpClient.post<ResponseI>(ruta, form)
    }
}
