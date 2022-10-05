import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HomeService } from 'src/app/service/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private router: ActivatedRoute , private HomeService: HomeService) { }
  list_home1:any = [];
  list_home2:any = [];
  list_home3:any= [];
  list_home4:any= [];

  ngOnInit(): void {
    this.HomeService.getCourseHome_Feautered().subscribe((data) => {
      this.list_home1 = data;
    })
    this.HomeService.getCourseHome_Lastest().subscribe((data) => {
      this.list_home2 = data;
    })
    this.HomeService.getCourseHome_Instructor().subscribe((data) => {
      this.list_home3 = data;
    })
    this.HomeService.getCourseHome_Student().subscribe((data) => {
      this.list_home4 = data;
    })

  }





}
