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
import { MaterialComponent } from './learning/material/material.component';
import { NoteComponent } from './learning/note/note.component';
import { QAComponent } from './learning/q-a/q-a.component';
import { ExerciseComponent } from './learning/exercise/exercise.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
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
    MaterialComponent,
    NoteComponent,
    QAComponent,
    ExerciseComponent,
    UserComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    // NgModule,
    FormsModule,
    Ng2SearchPipeModule,
   
  ]
})
export class PageModule { }
