import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms'
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './componenets/reactive-form/reactive-form.component';
import { AppRoutingModule } from './app-routing.module';

import { NewpostComponent } from './componenets/newpost/newpost.component';
import { PostserviceComponent } from './postservice/postservice.component';
import { MyserviceService } from './myservice.service';

import { EditBookComponent } from './edit-book/edit-book.component';

import { BooksComponent } from './books/books.component';
import { ListbooksComponent } from './listbooks/listbooks.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { StepperComponent } from './componenets/stepper/stepper.component';
import {MatStepperModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {FireBase} from './services/firebase.service'



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ReactiveFormComponent,
    NewpostComponent,
    PostserviceComponent,
    AddBookComponent,
    EditBookComponent,
    ListbooksComponent,  
    BooksComponent,
    ListbooksComponent,
    BookListComponent,
    StepperComponent,
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
   AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFirestoreModule,
   MatStepperModule,
   BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
