import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userDetails:FormGroup
  constructor(){
    this.userDetails=new FormGroup({
      Uname:new FormControl("",[Validators.required,Validators.minLength(4), Validators.maxLength(9)]),
      Lname:new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(9)]),
      email:new FormControl("",[Validators.required, Validators.email]),
      addr:new FormGroup({
        Ucity:new FormControl("",[Validators.required,
          Validators.minLength(4), Validators.maxLength(9)]),
        Uaddress:new FormControl("",[Validators.required,
          Validators.minLength(4), Validators.maxLength(9)])
      }),
      gender:new FormControl(),
      ucountry:new FormControl("",[Validators.required,
        Validators.minLength(4), Validators.maxLength(9)]),
    });

  };

  public register():any{
    console.log(this.userDetails.value);
  }
};
