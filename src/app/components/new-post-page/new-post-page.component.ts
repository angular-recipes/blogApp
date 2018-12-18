import { BlogService } from './../../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post-page',
  templateUrl: './new-post-page.component.html',
  styleUrls: ['./new-post-page.component.css']
})
export class NewPostPageComponent implements OnInit {

  constructor(
    private blogService: BlogService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  save(
    title: HTMLInputElement,
    author: HTMLInputElement,
    body: HTMLInputElement
  ) {
    this.blogService.savePost(title.value, author.value, body.value);
    this.router.navigate(['/home']);
  }

}
