import { BlogService } from './../../services/blog.service';
import { BlogPost } from './../../models/blog-post';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details-page',
  templateUrl: './post-details-page.component.html',
  styleUrls: ['./post-details-page.component.css']
})
export class PostDetailsPageComponent implements OnInit {
  post: BlogPost;
  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.post = this.blogService.getPost(id);
  }

}
