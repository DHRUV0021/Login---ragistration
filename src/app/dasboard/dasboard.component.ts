import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent {

  token = localStorage.getItem('token');

  
  constructor(private _route:Router){}
  
  ngOnInit(): void {
  if(this.token){
    this._route.navigate(['/dasboard']);
  }else{
    this._route.navigate(['/login']);
  }
  
}

logout(){
  localStorage.removeItem('token');
  this._route.navigate(['/login']);

  }
}
