import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  {path: 'blog', component: BlogComponent},
  {path: 'addBlog', component: AddBlogComponent},
  {path: 'blog/:id', component: BlogDetailsComponent},
  { path:'**', redirectTo: 'blog' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
