import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.css']
})
export class DetailBlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  btnReply() {
    document.getElementById('ip-reply')?.classList.add('d-block')
    document.getElementById('close')?.classList.add('d-block')
    document.getElementById('ip')?.focus()
  }
  btnClose() {
    document.getElementById('ip-reply')?.classList.remove('d-block')
    document.getElementById('close')?.classList.remove('d-block')
  }

}
