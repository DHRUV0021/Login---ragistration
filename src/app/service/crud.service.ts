import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {


  jsonUrl = "  http://localhost:3000/register";
  constructor(private _http:HttpClient) { }


  getItem(){
     return  this._http.get<Array<Data>>(this.jsonUrl);
  }

  addItem(data:Data){
    return this._http.post(this.jsonUrl,data);
  }
}
export class Data{
  id?:number;
  name?:string;
  password?:any;
  role?:string;
  token?:any;
  isActive?:boolean;
}
