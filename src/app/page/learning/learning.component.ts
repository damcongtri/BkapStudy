import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {
  listRoute: any
  lessonData: any = {}
  idCourse: any
  trackId: any
  lessionId: any
  lengthLession: any
  lengthTrack: any
  constructor(private service: CourseService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {


    this.actRoute.paramMap.subscribe((prams: any) => {
      this.idCourse = prams.get('id')


      this.trackId = prams.get('track')

      this.lessionId = prams.get('lession')


      this.service.getRouteCourse(this.idCourse).subscribe((data: any) => {
        console.log(data);
        this.listRoute = data[0].trackItem
        console.log(this.listRoute);
        // console.log(data[0].trackItem.lession);
        this.lengthTrack = data[0].trackItem.length
        console.log(this.lengthTrack);

        data[0].trackItem.forEach((track: any) => {
          track.id == this.trackId && (this.lessonData = track.lession.filter((lessionItem: any) => lessionItem.id == this.lessionId))
          track.id == this.trackId && (this.lengthLession = track.lession.length)
        })

        this.lessonData = this.lessonData[0]
        console.log(this.lessonData.video);
      })
    })

  }
  prevLession() {
    if (this.lessionId > 1 && this.trackId >= 1) {
      this.router.navigate([`/learning/${this.idCourse}/${this.trackId}/${Number(this.lessionId) - 1}`])
    }


    if (this.trackId > 1 && this.lessionId == 1) {
      // alert('ok')
      this.router.navigate([`/learning/${this.idCourse}/${Number(this.trackId) - 1}/${this.lengthLession}`])
    }

  }
  nextLession() {
    console.log(this.lengthLession);

    if (this.lengthTrack != this.trackId) {
      if (this.lessionId == this.lengthLession) {
        this.router.navigate([`/learning/${this.idCourse}/${Number(this.trackId) + 1}/1`])
      } else {
        this.router.navigate([`/learning/${this.idCourse}/${this.trackId}/${Number(this.lessionId) + 1}`])
      }

    }

  }


}
