import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  listCourse: any
  constructor(private service: CourseService) { }
  user: any;
  ngOnInit(): void {
    this.user = localStorage.getItem('acc') ? JSON.parse(localStorage.getItem('acc') as string) : null;
    this.service.getCourseUser(this.user.id).subscribe((data: any) => {
      this.listCourse = data;
    })
  }

}
