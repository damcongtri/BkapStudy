import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { DetailBlogComponent } from './detail-blog/detail-blog.component';
import { LearningComponent } from './learning/learning.component';
import { CoursesComponent } from './courses/courses.component';
import { DetailCoursesComponent } from './detail-courses/detail-courses.component';
import { SafePipe } from '../safe.pipe';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchFilterPipe } from '../search-filter.pipe';



@NgModule({
  declarations: [
    PageComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    DetailBlogComponent,
    LearningComponent,
    CoursesComponent,
    DetailCoursesComponent,

    UserComponent,
    SearchFilterPipe,
    SafePipe,
    UserComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    // NgModule,
    FormsModule,
    // Ng2SearchPipeModule,

    ReactiveFormsModule
  ]
})
export class PageModule { }
