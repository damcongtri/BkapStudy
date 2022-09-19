import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './page/blog/blog.component';
import { CoursesComponent } from './page/courses/courses.component';
import { DetailBlogComponent } from './page/detail-blog/detail-blog.component';
import { HomeComponent } from './page/home/home.component';
import { LearningComponent } from './page/learning/learning.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blogs', component: BlogComponent },
  { path: 'blog', component: DetailBlogComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'learning', component: LearningComponent },
  { path: 'course', component: DetailBlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
