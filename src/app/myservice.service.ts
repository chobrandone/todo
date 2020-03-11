import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { from, Observable } from 'rxjs';
import  { Post} from './post'

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  base_url:string="http://localhost:3000";
  option={
    headers:new HttpHeaders({
      'content-type': 'application/json'
    })
  };

  constructor(private http:HttpClient) { }
  getAllPost():Observable<any[]>{
    return this.http.get<any[]>(`${this.base_url}/post`)
  }
  // getPost():Observable<Post>{
  //   return this.http.get<Post>(`${this.base_url}/post/${id}`)
  // }
  storePost(post: Post):Observable<Post>{
    return this.http.post<Post>(`${this.base_url}/post`, post)
  }

}
