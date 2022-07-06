import { Component, OnInit } from '@angular/core';
import { Posts } from '../models/Post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  posts:any;
  constructor(private postServices: PostsService) {}

  ngOnInit(): void {
    this.loadata();
  }
  loadata(){
    this.postServices.list().subscribe(
      resp =>{
        this.posts = resp;
        console.log(this.posts);
      }
    );
  }

}
