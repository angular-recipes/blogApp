import { BlogService } from './../../services/blog.service';
import { BlogPost } from './../../models/blog-post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  posts: BlogPost[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.posts = this.blogService.getPosts();
  }

}
