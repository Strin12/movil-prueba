import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Posts } from '../models/Post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
posts: Posts = new Posts()

  constructor(private postServices:PostsService) {}


  registrar(form: NgForm){
    this.posts.personas_id = localStorage.getItem('id');
    this.postServices.registrar(this.posts).subscribe(
      resp =>{
        console.log(resp);
      }
    );
  }

}
