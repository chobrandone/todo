import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { from } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  customForm:FormGroup;
  formData: any;
  submitted:boolean=false;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.customForm=this.fb.group({
      'firstname':['brandone',Validators.required],
      'lastname' :['',Validators.required],
      'email' :['@gmail',[Validators.email,Validators.email]],
      'country' :['',Validators.required],
      'city' :['',Validators.required],
      'adress':['',[Validators.required,Validators.minLength(20)]]
    });              
  }
  get f(){
    return this.customForm.controls
  }

  onSubmit(){
    this.submitted=true;
    
    if(this.customForm.invalid){
      return;
    }
    this.formData= JSON.stringify(this.customForm.value)
    alert(`submited ${this.formData}`);
  }
}
