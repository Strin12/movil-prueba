import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  posts:any;
  constructor(private postServices: PostsService) {}

  ngOnInit(): void {
    this.loadata();
  }
  loadata(){
    this.postServices.inactivos().subscribe(
      resp =>{
        this.posts = resp;
        console.log(this.posts);
      }
    );
  }

}