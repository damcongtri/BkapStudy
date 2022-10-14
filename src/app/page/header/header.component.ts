import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { HomeService } from 'src/app/service/home.service';

interface Searchpipe {
  name: string;
  description: string;

}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http: HttpClient, private homeservice: HomeService, private service: CourseService) { }
  user: any
  keySearch: any;
  product: any;
  course: any;

  ngOnInit(): void {
    this.user = localStorage.getItem('acc') ? JSON.parse(localStorage.getItem('acc') as string) : null;
    console.log(this.user);

    this.homeservice.getCourseHome_Feautered().subscribe((data) => {
      this.product = data;
    })
    this.service.getAllCourse().subscribe((data: any) => {
      this.course = data
    })
  }

  Logout() {
    localStorage.removeItem('acc');
    this.user = localStorage.getItem('acc') ? JSON.parse(localStorage.getItem('acc') as string) : null;

  }







}
