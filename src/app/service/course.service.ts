import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const url = 'http://localhost:3000/cousers'
const urlTag = 'http://localhost:3000/tags'
const urlCate = 'http://localhost:3000/categories'
const urlRoute = 'http://localhost:3000/courseRoute'
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }
  getAllCourse(): Observable<any[]> {
    return this.http.get<any[]>(url)
  }
  getPageCourse(page: number): Observable<any[]> {
    return this.http.get<any[]>(`${url}?_page=${page}&_limit=12`)
  }
  getDetailCourse(id: any): Observable<any> {
    return this.http.get<any>(`${url}/${id}`)
  }

  getTags(): Observable<any[]> {
    return this.http.get<any[]>(urlTag)
  }
  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(urlCate)
  }
  getDetailCategories(id: any): Observable<any[]> {
    return this.http.get<any[]>(`${urlCate}/${id}`)
  }
  getRouteCourse(id: any): Observable<any> {
    return this.http.get<any>(`${urlRoute}?courseId=${id}`)
  }

}
