import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component'; 
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { BlogComponent } from './page/blog/blog.component';
import { DetailBlogComponent } from './page/detail-blog/detail-blog.component';
import { LearningComponent } from './page/learning/learning.component';
import { CoursesComponent } from './page/courses/courses.component';
import { DetailCoursesComponent } from './page/detail-courses/detail-courses.component';
import { MaterialComponent } from './page/learning/material/material.component';
import { NoteComponent } from './page/learning/note/note.component';
import { QAComponent } from './page/learning/q-a/q-a.component';
import { ExerciseComponent } from './page/learning/exercise/exercise.component';

@NgModule({
  declarations: [
    AppComponent,
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
    ExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
