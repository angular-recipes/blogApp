import { BlogPost } from './../models/blog-post';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts: BlogPost[];
  private numOfPosts = 1;

  constructor() {
    this.posts = [
      new BlogPost(
        this.numOfPosts++,
        'Hello World',
        'Sam',
        'This is my first blog post'
       ),
      new BlogPost(
        this.numOfPosts++,
        'Election results are out',
        'Sam',
        'Looks like congress is winning'
       ),
      new BlogPost(
        this.numOfPosts++,
        'Angular Tutorial',
        'David',
        'Angular is such a nice framework'
       ),
      new BlogPost(
        this.numOfPosts++,
        'React Tutorial',
        'Mike',
        'We will learn React later'
       )
    ]
  }

  getPosts() : BlogPost[] {
    return this.posts;
  }

  getPost(id: number) : BlogPost {
    return this.posts.find(function(p) {
      return p.id == id;
    });
  }

  getAuthors() : string[] {
    return this.posts
      .map(function(p) {
      return p.author;
    })
    .filter(function (value, index, self) { 
      return self.indexOf(value) === index;
    })
    ;
  }

  savePost(title: string, author: string, body: string) {
    let newPost = new BlogPost(
      this.numOfPosts++, 
      title,
      author,
      body
    );
    this.posts.push(newPost);
  }
}
