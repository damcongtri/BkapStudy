import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const url = 'http://localhost:3000/cousers'
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }
  getCourseHome(): Observable<any> {
    let course: any = []
    course = this.http.get(url)
    return course.filter((itemCourse: any) => itemCourse.home === true)
  }
}
