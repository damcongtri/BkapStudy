import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = 'http://localhost:3000/cousers';
const url2 = ' http://localhost:3000/Author';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  getCourseHome_Feautered(): Observable<any[]> {
    return this.http.get<any[]>(`${url}?status_1=true`)
  }
  getCourseHome_Lastest(): Observable<any[]> {
    return this.http.get<any[]>(`${url}?status_2=true`)
  }
  getCourseHome_Instructor(): Observable<any[]> {
    return this.http.get<any[]>(`${url2}?status_3=true`)
  }
  getCourseHome_Student(): Observable<any[]> {
    return this.http.get<any[]>(`${url2}?status_4=true`)
  }





}