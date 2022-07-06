import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Login } from '../models/Login';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
usuarios: Login = new Login();

  constructor(private usuariosServices: LoginService, private router: Router) { }

  ngOnInit() {
  }

  Login(form: NgForm){
    this.usuariosServices.login(this.usuarios).subscribe(
      resp => {
        localStorage.setItem('token', resp['token']);
        localStorage.setItem('nombre', resp['users']['name']);
        localStorage.setItem('avatar', resp['users']['personas']['avatar']);
        localStorage.setItem('id', resp['users']['personas']['id']);
        console.log(resp);
        this.router.navigateByUrl('inicio/tabs/tab1');
      }

    );

  }
}
