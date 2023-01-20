import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginI } from 'src/app/models/login.interface';
import { ResponseI } from 'src/app/models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_SERVER = "https://63c80da9e52516043f4a983c.mockapi.io/api/v1/"

  constructor(
    private readonly httpClient: HttpClient
  ) { }

    getDataUsers(form:LoginI): Observable<ResponseI> {
      let rutaURL = this.API_SERVER+"users";
      return this.httpClient.post<ResponseI>(rutaURL, form);
    }

}
