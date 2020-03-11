import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todoArray=[];

  todo;
  //todoForm: new FormGroup()
  name ='angular-firebase-app';

  student: Observable<any>
  constructor(db: AngularFirestore){
    this.student=db.collection('students').valueChanges();
  }
  


   addTodo(value){
    if(value!==""){
     this.todoArray.push(value)
    //console.log(this.todos) 
  }else{
    alert('Field required **')
  }
    
  }
  

  /*delete item*/
  deleteItem(todo){
  	for(let i=0 ;i<= this.todoArray.length ;i++){
  		if(todo== this.todoArray[i]){
  			this.todoArray.splice(i,1)
  		}
  	}
  }
}
