import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
url = 'http://127.0.0.1:8000/api/'
  constructor(private http: HttpClient, private login:LoginService) { }

  list(){
    return this.http.get(`${this.url}posts?token=${this.login.leer_token()}`);
  }
  inactivos(){
    return this.http.get(`${this.url}postsInactivo?token=${this.login.leer_token()}`);
  }
  registrar(posts: any){
    return this.http.post(`${this.url}posts?token=${this.login.leer_token()}`, posts);
  }
}
