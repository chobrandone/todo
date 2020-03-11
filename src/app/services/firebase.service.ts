import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'

interface book{
  title:string
}
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db:AngularFirestore) { }
  getAllBooks(){
    return this.db.collection("books").valueChanges();
  }
  
}
