import { Component } from '@angular/core';
import { CrudService, Data } from '../service/crud.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  loginForm: FormGroup;
  allDatas: Array<Data> = new Array<Data>();
  token = localStorage.getItem('token');

  constructor(private Crud: CrudService, private _route:Router) { }

  ngOnInit(): void{
    this.loginFormDetails();
    this.getDatas();
  
    if(this.token){
      this._route.navigate(['/dasboard']);
    }else{
      this._route.navigate(['/login']);
    }
  }

  loginFormDetails(){
    this.loginForm = new FormGroup({
      name: new FormControl,
      password: new FormControl,
      token: new FormControl
    });
  }

  getDatas(){
    this.Crud.getItem().subscribe({
      next: (res) => {
        this.allDatas = res
        this.loginFormDetails();
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("data get");
      }
    })
  }

  loginData(){
    let Name = this.loginForm.value.name;
    let Password = this.loginForm.value.password;

   this.allDatas.filter((x)=>{
    if(x.name == Name && x.password == Password){
      localStorage.setItem('token',x.token);
      this._route.navigate(['/dasboard']);
    }
   })
  }
}
