import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms'
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookForm:FormGroup;
  createBook;

  success_msg =false;
  error_msg = false;

  constructor(private fb:FormBuilder, private db:AngularFirestore) { }

 

  ngOnInit() {
    this.bookForm=this.fb.group({
      'Title':['',Validators.required],
      'Author':['',Validators.required],
      'Edition':['',Validators.required]

    })
  }
onSubmit(){
  this.db.collection("books").add(this.bookForm.value)
  .then((docref) =>{
    console.log(docref.id);
    this.success_msg=true
  })
  .catch( (error) =>{ 
    this.error_msg =true;
    console.log(error);
  });
 
  console.log(this.bookForm.value)
}
}
