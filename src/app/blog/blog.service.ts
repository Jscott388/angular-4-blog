import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs';
import 'rxjs/add/observable/throw';

import { Post } from './post';


@Injectable()
export class BlogService {

  constructor(private http: Http) { }

  getPosts(): Observable<Post[]> {
    return this.http.get('http://localhost:3000/blogs')
      .map((res: Response) => res.json())
  }

}
