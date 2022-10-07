import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = 'http://localhost:3000/blogs'
const url2 = 'http://localhost:3000/blog'
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  getAllBlogs(): Observable<any[]> {
    return this.http.get<any[]>(url)
  }
  findBlog(id: number): Observable<any> {
    return this.http.get<any>(`${url2}/${id}`)
  }
}
