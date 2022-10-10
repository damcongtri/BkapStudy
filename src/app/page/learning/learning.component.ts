import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/app/service/comment.service';
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
  dataUser: any
  CheckFormCreate: boolean = true
  CheckReply: boolean = true
  listNote: any = []

  listComment: any = []
  constructor(private service: CourseService, private actRoute: ActivatedRoute, private router: Router, private serviceComment: CommentService) { }

  formEdit = new FormGroup({
    title: new FormControl(''),
    id: new FormControl(),
    courseId: new FormControl(),
    content: new FormControl('')
  })
  formCreate = new FormGroup({
    title: new FormControl(''),
    courseId: new FormControl(),
    content: new FormControl('')
  })
  formComment = new FormGroup({
    content: new FormControl('', Validators.required),
    lessionId: new FormControl(),
    userId: new FormControl(),
    userName: new FormControl(''),
    avatar: new FormControl(''),
    courseId: new FormControl()
  })

  ngOnInit(): void {
    this.dataUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null

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
    var video: any = document.getElementById('video')
    var widthVideo: any = video.offsetWidth
    var height: number = Number(widthVideo) * 0.65
    video.style.height = `${height}px`
    window.addEventListener("resize", _ => {
      console.log(widthVideo);

      widthVideo = video.offsetWidth
      height = Number(widthVideo) * 0.65
      console.log('height:', height);

      video.style.height = `${height}px`
    })
    // note 
    this.getListNote()
    // comment
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
  getListNote() {
    this.service.getNoteCourse(this.idCourse).subscribe(data => {
      this.listNote = data
      console.log(data);

    })
  }
  editNote(id: any) {
    this.service.getItemNoteCourse(id).subscribe((data: any) => {
      this.formEdit.patchValue(data)
    })
    this.CheckFormCreate = false
  }
  putNote() {
    this.service.putNoteCourse(this.formEdit.value).subscribe(data => {
      console.log(data);
      alert('ok')
      this.CheckFormCreate = true
      this.getListNote()
    })
  }
  postNote() {
    this.formCreate.patchValue({ courseId: this.idCourse })

    this.service.postNoteCourse(this.formCreate.value).subscribe(data => {
      console.log(data);
      alert('done')
      this.CheckFormCreate = true
      this.getListNote()
    })

  }
  deleteNote(id: any) {
    confirm('Are you Delete ?') && (this.service.deleteNoteCourse(id).subscribe(_ => {

      this.CheckFormCreate = true
      this.getListNote()
    }))
  }

  // comment
  getAllComment() {
    this.serviceComment.getCommentCourse(this.idCourse, this.lessionId).subscribe(data => {
      this.listComment = data
    })
  }
  postComment() {
    if (this.formComment.valid) {

      this.formComment.patchValue({
        lessionId: this.lessionId,
        userId: this.dataUser.id,
        userName: this.dataUser.userName,
        avatar: this.dataUser.avatar,
        courseId: this.idCourse
      })
      this.serviceComment.postCommetCourse(this.formComment.value).subscribe(data => {
        console.log(data);
        this.getAllComment()
      })
    }
  }

}
