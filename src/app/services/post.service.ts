import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = "http://localhost:5000"

  constructor(private http:HttpClient) { }

  getPosts() : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/posts`);
  }

  getPostData(id: any) : Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/posts/${id}`)
  }
}
