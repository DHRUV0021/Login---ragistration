import { Component } from '@angular/core';
import { Data, Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-ragister',
  templateUrl: './ragister.component.html',
  styleUrls: ['./ragister.component.scss']
})
export class RagisterComponent {
  hide = true;
  task?: Data;
  myForm: FormGroup;
  allData: Array<Data> = new Array<Data>();
  spToken;
  token = localStorage.getItem('token')

  constructor(private Crud: CrudService, private _route: Router) { }

  ngOnInit(): void {
    this.ReactiveForm();
    
    if(this.token){
      this._route.navigate(['/dasboard']);
    }else{
      this._route.navigate(['/ragister']);
    }

  }


  ReactiveForm() {
    this.spToken = this.makeid(12);

    this.myForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl('define'),
      token: new FormControl(this.spToken),
      isActive: new FormControl('true')
    });
  }

  makeid(length) {
    let result = '';
    const charcters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    const charctersLength = charcters.length;
    let counter = 0;
    while (counter < length) {
      result += charcters.charAt(Math.floor(Math.random() * charctersLength))
      counter += 1;
    }
    return result;
  }


  addData() {
    this.Crud.addItem(this.myForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.ReactiveForm();
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("data added");
      }
    })
  }
}
