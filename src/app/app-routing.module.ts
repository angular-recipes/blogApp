import { PostDetailsPageComponent } from './components/post-details-page/post-details-page.component';
import { NewPostPageComponent } from './components/new-post-page/new-post-page.component';
import { AuthorsPageComponent } from './components/authors-page/authors-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'authors', component: AuthorsPageComponent },
  {path: 'new-post', component: NewPostPageComponent },
  {path: 'post/:id', component: PostDetailsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
