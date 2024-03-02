import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
//import { Router } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,MatTooltipModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginObj:any ={
    userName:'',
    password:''
  }
  constructor(private router: Router) {}

onLogin(){
  if(this.loginObj.userName == "admin" && this.loginObj.password == "246810"){
    this.router.navigateByUrl('/products')
  }else{
    alert('Invalid Username or Password');
  }
}
}
