import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = "http://localhost:3000/blogs"
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  getAllBlog(): Observable<any[]> {
    return this.http.get<any[]>(url)
  }
  getDetailBlog(id: any): Observable<any> {
    return this.http.get(`${url}/${id}`)
  }
}
