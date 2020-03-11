import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css']
})
export class ListbooksComponent implements OnInit {
  books:any[]=[];

  constructor(private db:AngularFirestore) { }

  ngOnInit() {
    this .db.collection("books").get()
      .subscribe((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{
          this.books.push({
            id:doc.id,
            data:doc.data()
          })
        })
      })
  }

}
