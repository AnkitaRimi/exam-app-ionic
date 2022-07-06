import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamformService } from 'src/app/services/Exam/examform.service';

@Component({
  selector: 'app-examdetails',
  templateUrl: './examdetails.page.html',
  styleUrls: ['./examdetails.page.scss'],
})
export class ExamdetailsPage implements OnInit {
  Examdetails: any[] = [];
  item: any;


  constructor(private postService: ExamformService, private router: Router) { }

  GetExamDetails(exm_id) {
    this.postService.GetExamDetails(exm_id).subscribe(
      (res : any) => {
        console.log("all posts:", res);
        this.Examdetails = res.Ds.Table;
      },
      (err) => { console.log(err) }
    )
  }

  ngOnInit() {
    //this.singleExam = history.state;
    this.item = this.router.getCurrentNavigation().extras.state ?
      this.router.getCurrentNavigation().extras.state : history.state;
    this.GetExamDetails(this.item.exm_id);
    console.log(this.item)
  }

}
