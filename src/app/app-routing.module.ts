import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './componenets/reactive-form/reactive-form.component';
import { NewpostComponent } from './componenets/newpost/newpost.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import {BookListComponent} from './books/book-list/book-list.component'
import { ListbooksComponent } from './listbooks/listbooks.component';

const routes:Routes=[
  
  {path:'reactive-forms', component:ReactiveFormComponent},
  {path:'post/new', component:NewpostComponent},
  {path:'books/add', component:AddBookComponent},
  {path:'books/list', component:ListbooksComponent},
  {path:'books',component:BookListComponent},
  {path:'books/id/edit',component:BookListComponent}

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
