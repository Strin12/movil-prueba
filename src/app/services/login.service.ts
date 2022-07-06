import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://127.0.0.1:8000/api/'

  token: any;
  constructor(private hhtp: HttpClient) { }


  login(usuario: any){
    return this.hhtp.post(`${this.url}login`, usuario);
  }
  leer_token() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    } else {
      this.token = null;
    }
    return this.token;
  }
}
