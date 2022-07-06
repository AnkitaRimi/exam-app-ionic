import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { ExamformService } from 'src/app/services/Exam/examform.service';
@Component({
  selector: 'app-examform',
  templateUrl: './examform.page.html',
  styleUrls: ['./examform.page.scss'],
})
export class ExamformPage implements OnInit {
  exm_name=null;
  exm_date=null;
  exm_time=null;
  exm_id=0;
  exmd_subject_name=null;
  exmd_subject_code=null;
  exmd_full_marks=null;
  exmd_cutoff_marks=null;
  Exam_Dtl:any[] = [];
  details=null;

  constructor(public nav: NavController,private router: Router,private postService:ExamformService,public toastController: ToastController) {
    
   }

  goTonextP(){
    let params: any = {
      exm_name: this.exm_name,
      exm_date:  moment(this.exm_date).format('YYYY-MM-DD'),
      exm_time: moment(this.exm_time).format('HH:MM'),
      exm_id:0,
      exm_doc:'',
      Exam_Dtl:this.Exam_Dtl
    }
   // this.router.navigate(['/comment'], { state: params });
   this.InsertExamDetails(params)
    console.log("AllData", params)
    
  }
  InsertExamDetails(jsondataHdr){
    this.postService.InsertExamDetails(JSON.stringify(jsondataHdr)).subscribe(
      (res:any)=>{
      console.log("Details:",res);
      this.details = res;
      if(res.NoOfRecord >0){
       this.presentToast(res.Msg.en);
      }else{
        this.presentToast(res.Msg.en);
      }
      },
      (err)=>{console.log(err)}
    )
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }


  ngOnInit() {
  }
  addSubject(){
    let singleSubject = {
      exmd_subject_name:this.exmd_subject_name,
      exmd_subject_code:this.exmd_subject_code,
      exmd_full_marks:this.exmd_full_marks,
      exmd_cutoff_marks:this.exmd_cutoff_marks,
    }
    this.Exam_Dtl.push(singleSubject);
    
  this.exmd_subject_name=null;
  this.exmd_subject_code=null;
  this.exmd_full_marks=null;
  this.exmd_cutoff_marks=null;
  console.log("Now subjects:",this.Exam_Dtl)
  }
}
