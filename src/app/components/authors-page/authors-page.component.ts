import { BlogService } from './../../services/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors-page',
  templateUrl: './authors-page.component.html',
  styleUrls: ['./authors-page.component.css']
})
export class AuthorsPageComponent implements OnInit {
  authors: string[];
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.authors = this.blogService.getAuthors();
  }

}
