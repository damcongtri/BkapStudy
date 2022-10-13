import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../form/login/login.component';
import { RegisterComponent } from '../form/register/register.component';
import { BlogComponent } from './blog/blog.component';
import { CoursesComponent } from './courses/courses.component';
import { DetailBlogComponent } from './detail-blog/detail-blog.component';
import { DetailCoursesComponent } from './detail-courses/detail-courses.component';
import { HomeComponent } from './home/home.component';
import { LearningComponent } from './learning/learning.component';
import { PageComponent } from './page.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '', component: PageComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'blogs', component: BlogComponent },
      { path: 'blog/:id', component: DetailBlogComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'learnings', component: LearningComponent },
      { path: 'learning/:id/:track/:lession', component: LearningComponent },
      { path: 'course/:id', component: DetailCoursesComponent },
      { path: 'user', component: UserComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
