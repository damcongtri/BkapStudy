import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const urlCourse = 'https://62a04fa9202ceef7086a607e.mockapi.io/commentsCourse'
const urlBlog = 'https://62a04fa9202ceef7086a607e.mockapi.io/commentsBlog'
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }
  getCommentCourse(id_course: any, id_lession: any): Observable<any[]> {
    return this.http.get<any[]>(`${urlCourse}?courseId=${id_course}&lessionId=${id_lession}`)
  }
  postCommetCourse(data: any): Observable<any> {
    return this.http.post(urlCourse, data)
  }
  getCommentBlog(id_course: any, id_lession: any): Observable<any[]> {
    return this.http.get<any[]>(`${urlBlog}?courseId=${id_course}&lessionId=${id_lession}`)
  }
  postCommetBlog(data: any): Observable<any> {
    return this.http.post(urlBlog, data)
  }
}
