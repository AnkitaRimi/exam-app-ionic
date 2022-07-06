import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PostService } from 'src/app/services/post/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.page.html',
  styleUrls: ['./post-list.page.scss'],
})

export class PostListPage implements OnInit {
  posts: any;

  constructor(private postService:PostService,private router:Router ) {

  }
  ionViewWillEnter(){
    this.getAllPost();
  }

  getAllPost(){
    this.postService.getAllPost().subscribe(
      (res)=>{
      console.log("all posts:",res);
      this.posts = res;
      },
      (err)=>{console.log(err)}
    )
  }

  openDetails(singlePost) {
    //this.navCtrl.push('PostDetailsPage', { film: singlePost });
    this.router.navigateByUrl('/post-details', { state: singlePost });
  }

  ngOnInit() {
  }
  // ehat is interface?
  // how to write and use?
}
