import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const url = 'http://localhost:3000/cousers'
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }
  getAllCourse(): Observable<any[]> {
    return this.http.get<any[]>(url)
  }
  getDetailCourse(id: any): Observable<any> {
    return this.http.get<any>(`${url}/${id}`)
  }
}
