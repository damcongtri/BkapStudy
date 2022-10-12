import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-detail-courses',
  templateUrl: './detail-courses.component.html',
  styleUrls: ['./detail-courses.component.css']
})
export class DetailCoursesComponent implements OnInit {
  course: any
  user: any
  constructor(private service: CourseService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('acc') ? JSON.parse(localStorage.getItem('acc') as string) : null
    let id = this.actRoute.snapshot.params['id']
    this.service.getDetailCourse(id).subscribe(data => {
      this.course = data
    })
  }
  buyCourse(data: any) {
    alert('ok')
    data.userId = this.user.id;
    console.log(data);
    this.service.postCourseUser(data).subscribe(data => {

    })
  }

}
