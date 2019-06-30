import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent implements OnInit{
  FormGroup: FormGroup;
  constructor(private _formbuilder:FormBuilder){}
  ngOnInit(){
    //this.myfrom=
    this.FormGroup = this._formbuilder.group({
      itemRows:this._formbuilder.array([this.formArray()])
    });
  }
  formArray(){
    return this._formbuilder.group({
      fname:[""],
      lname:[""]
    })
  }
  addInputField(){
     const control = <FormArray>this.FormGroup.controls['itemRows'];
     control.push(this.formArray());
  }
  removeInputField(i:number){
    const control = <FormArray>this.FormGroup.controls['itemRows'];
    control.removeAt(i);
  }
}
