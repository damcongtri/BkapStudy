import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.css']
})
export class DetailBlogComponent implements OnInit {

  blog: any = [];

  constructor(private blogService: BlogService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRouter.snapshot.params['id'];
    this.blogService.findBlog(id).subscribe((data) => {
      this.blog = data;
    })
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
