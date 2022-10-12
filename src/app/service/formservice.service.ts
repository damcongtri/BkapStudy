import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjectUnsubscribedError, Observable } from 'rxjs';
const url= 'http://localhost:3000/user';
@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  constructor(private http :HttpClient ) { 
    
  }
  postUser(data:any) {
    return this.http.post(url,data)
  } 

  getUser(data:any) {
    return this.http.get<any[]>(`${url}?email=${data.email}&password=${data.password}`)
  }
}
