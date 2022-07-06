import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { NavController, NavParams } from '@ionic/angular';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.page.html',
  styleUrls: ['./post-details.page.scss'],
})
export class PostDetailsPage implements OnInit {
  singlePost:any;
  details:any;
  id:any;
  comments:any;
  singleComment:any;
  

  constructor(private postService:PostService,private router:Router) { 
   
  }
  getSinglePost(id){
    this.postService.getSinglePost(id).subscribe(
      (res)=>{
      console.log("all posts:",res);
      this.details = res;
      },
      (err)=>{console.log(err)}
    )
  }
  getSingleComment(id){
    this.postService.getSingleComment(id).subscribe(
      (res)=>{
      console.log("all posts:",res);
      this.comments = res;
      },
      (err)=>{console.log(err)}
    )
  }

  comment(singleComment){
    //this.router.navigate(['/post-details']);
    this.getSingleComment(this.singlePost.id);

  }

  ngOnInit() {
    //this.comment(singleComment);
    this.singlePost = this.router.getCurrentNavigation().extras.state?
                       this.router.getCurrentNavigation().extras.state: history.state;
    //this.singleComment=history.state;
    console.log("single post : ",this.singlePost)
    //console.log("single Comment : ",this.singleComment)
    this.getSinglePost(this.singlePost.id);
    //this.getSingleComment(this.singleComment.id);
  }

}
