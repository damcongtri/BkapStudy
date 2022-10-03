import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  minValue: number = 0
  maxValue: number = 0
  dateValue: number = 2000
  constructor() { }

  ngOnInit(): void {
  }
  changePrice() {

  }
  rangeSlideMin(event: any) {
    // console.log(event.target.value);

    this.minValue = event.target.value
    console.log(this.minValue);


  }
  rangeSlideDate(event: any) {
    this.dateValue = event.target.value;
  }
  rangeSlideMax(event: any) {
    this.maxValue = event.target.value
  }
}
