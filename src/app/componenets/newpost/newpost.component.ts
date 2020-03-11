import { Component, OnInit } from '@angular/core';

import {FormGroup,Validators, FormBuilder} from '@angular/forms'
import { MyserviceService } from 'src/app/myservice.service';
@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
  myForm:FormGroup;

  constructor(private services:MyserviceService,private fb:FormBuilder) { }

  ngOnInit() {
    this.myForm=this.fb.group({
      userId:['',Validators.required],
      id:['',Validators.required],
      title:['',Validators.required,Validators.maxLength(5)],
      body:['',Validators.required,Validators.maxLength(20)]
    })
  }
  f(){return this.myForm.controls}
    onsubmit(){
      if(this.myForm.valid){
        return;
      }
      this.services.storePost(this.myForm.value).subscribe(
        (data)=> {
          console.log(data)
        },
        (error)=>{
          console.log(error)
        },
        ()=>console.log('completed')
      )

}
}
