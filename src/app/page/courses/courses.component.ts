import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  minValue: number = 0
  maxValue: number = 0
  dateValue: number = 2000
  coursesList: any
  numPage = 1
  DataFilterCourses: any
  tagCourse: any = []
  categories: any = []
  categoriesId: any = []
  status: any
  listTag: any
  listCategories: any
  check: boolean = true
  number_page: any = []
  constructor(private service: CourseService) { }

  ngOnInit(): void {

    this.service.getPageCourse(this.numPage).subscribe(data => {
      this.coursesList = data
      // console.log(this.courses);
    })
    this.service.getAllCourse().subscribe(data => {
      console.log(data.length);
      // console.log(();

      for (let i = 1; i <= ((Number(data.length) / 12) + 1); i++) {
        this.number_page.push(i)
      }
      console.log(this.number_page);

      this.DataFilterCourses = data
    })

    this.service.getTags().subscribe(data => {
      this.listTag = data
      console.log(this.listTag);

    })
    this.service.getCategories().subscribe(data => {
      this.listCategories = data
      console.log(data);

    })
  }
  numPagee(number: number) {
    this.numPage = number
    this.service.getPageCourse(this.numPage).subscribe(data => {
      this.coursesList = data
    })
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



  // change value
  handleStatus(id: number) {
    this.status == id ? this.status = null : this.status = id
    alert(this.status)
  }
  handleTag(id: number) {
    if (this.tagCourse.includes(id)) {
      let index = this.tagCourse.findIndex((element: any) => element == id)
      this.tagCourse.splice(index, 1)
    } else {
      this.tagCourse.push(id)
    }
  }
  handleCategory(e: any) {
    // console.log(e.target.value);
    // let dataTemp: any
    this.service.getDetailCategories(e.target.value).subscribe((data: any) => {
      // console.log(data);
      if (this.categories[0]) {
        // alert('ok')
        !this.categoriesId.includes(data.id) && this.categories.push(data) && this.categoriesId.push(data.id)
      } else {
        this.categories.push(data)
        this.categoriesId.push(data.id)
      }
      console.log(this.categories);
    })



  }
  removeCate(id: any) {
    let index: number = this.categories.findIndex((data: any) => data.id == id)
    let indexId: number = this.categoriesId.findIndex((data: any) => data == id)
    this.categories.splice(index, 1)
    this.categoriesId.splice(indexId, 1)
  }

  // filter
  filterPrice(courses: any) {
    if (this.minValue != 0 || this.maxValue != 0) {

      (Number(this.minValue) <= this.maxValue) && (courses = courses.filter((course: any) => {

        // return this.maxValue < 1000 ? (course.price >= this.minValue) : (course.price >= this.minValue && course.price <= this.maxValue)
        return (course.price >= this.minValue && course.price <= this.maxValue)
      }))
      console.log(courses);
    }
    return courses
  }
  filterCategory(courses: any) {
    this.categoriesId[0] && this.categoriesId.forEach((element: any) => {
      courses = courses.filter((course: any) => course.category_id.includes(element))
    });
    return courses
  }
  filterTag(courses: any) {
    this.tagCourse[0] && this.tagCourse.forEach((element: any) => {
      courses = courses.filter((course: any) => course.tag_id.includes(element))
    });
    return courses
  }
  filterStatus(courses: any) {
    console.log(this.status);

    this.status && (courses = courses.filter((course: any) => (Number(course.status_id) === Number(this.status))))
    console.log(courses);

    return courses
  }
  filterDate(courses: any) {
    this.dateValue != 2000 && (courses = courses.filter((course: any) => course.date == this.dateValue))
    return courses
  }

  filter() {
    this.check = false
    // alert('ok')
    console.log(this.DataFilterCourses);

    let result: any = this.DataFilterCourses
    result && (result = this.filterPrice(result))
    // console.log(result);

    result && (result = this.filterCategory(result))
    // console.log(result);
    result && (result = this.filterTag(result))
    // console.log(result);
    result && (result = this.filterStatus(result))
    // console.log(result);
    result && (result = this.filterDate(result))
    // console.log(result);

    this.coursesList = result
  }
  clearFilter() {
    this.check = true
    this.service.getPageCourse(this.numPage).subscribe(data => {
      this.coursesList = data
      // console.log(this.courses);
    })
  }
}
