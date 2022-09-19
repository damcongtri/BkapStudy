import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', loadChildren: () => import('./page/page.module').then(mod => mod.PageModule), },
  { path: 'user', loadChildren: () => import('./form/form.module').then(mod => mod.FormModule), }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
