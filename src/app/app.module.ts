import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthorsPageComponent } from './components/authors-page/authors-page.component';
import { NewPostPageComponent } from './components/new-post-page/new-post-page.component';
import { PostDetailsPageComponent } from './components/post-details-page/post-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AuthorsPageComponent,
    NewPostPageComponent,
    PostDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
