import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-detail-courses',
  templateUrl: './detail-courses.component.html',
  styleUrls: ['./detail-courses.component.css']
})
export class DetailCoursesComponent implements OnInit {
  course: any
  user: any
  checkCourse: any = []
  id: any
  constructor(private service: CourseService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('acc') ? JSON.parse(localStorage.getItem('acc') as string) : null
    this.actRoute.paramMap.subscribe((param: any) => {
      this.id = param.get(['id'])
      this.service.getDetailCourse(this.id).subscribe(data => {
        this.course = data
        this.user = localStorage.getItem('acc') ? JSON.parse(localStorage.getItem('acc') as string) : null;
        this.service.getCourseUser(this.user.id).subscribe((data: any) => {
          this.checkCourse = data.filter((db: any) => (db.courseId == this.course.id))
          console.log(this.checkCourse);
        })
      })
    })


  }
  buyCourse(data: any) {
    if (this.user) {
      // alert('ok')
      data.userId = this.user.id;
      data.courseId = data.id
      delete data['id']
      console.log(data);
      this.service.postCourseUser(data).subscribe(data => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Successfully Purchase',
          showConfirmButton: true,
          timer: 1500
        })
        this.router.navigate([`/learning/${data.courseId}/1/1`])
      })
    } else {
      Swal.fire({
        title: 'You Need Login !',
        text: "Do you want to go to the login page?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result: any) => {
        if (result.isConfirmed) {
          this.router.navigate(['/user/login'])
        }
      })

    }
  }


}
