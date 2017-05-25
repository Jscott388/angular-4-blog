import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  total: number;
  p: number = 1;
  posts: Post[];

  constructor(private blogservice: BlogService) { }

  getPosts() {
    this.blogservice.getPosts().subscribe(res => {
      this.posts = res;
      this.total = res.length;
    })
  }

  ngOnInit() {
    this.getPosts();
  }

}
