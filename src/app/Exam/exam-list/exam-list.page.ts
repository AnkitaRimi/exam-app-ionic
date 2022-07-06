import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { ExamformService } from 'src/app/services/Exam/examform.service';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.page.html',
  styleUrls: ['./exam-list.page.scss'],
})
export class ExamListPage implements OnInit {
  keyword = '';
  FromDate = moment().subtract(7, 'days').format('YYYY-MM-DD');
  ToDate = moment().format('YYYY-MM-DD');
  list = null;
  item = '';
  TableList: any[] = [];
  DeleteList: any[] = [];

  constructor(public nav: NavController, public router: Router, private postService: ExamformService, public toastController: ToastController, public alertctrl: AlertController) { }
  goToapi() {
    let ExamList: any = {
      keyword: this.keyword,
      FromDate: moment(this.FromDate).format('YYYY-MM-DD'),
      ToDate: moment(this.ToDate).format('YYYY-MM-DD')
    }
    this.GetExamList(ExamList.keyword, ExamList.FromDate, ExamList.ToDate);

    console.log("TableList", this.TableList)
    console.log("ExamList", ExamList)
  }
  // goback(){
  //   this.router.navigateByUrl('/examform');
  // }
  GetExamList(keyword, FromDate, ToDate) {
    this.postService.GetExamList(keyword, FromDate, ToDate).subscribe(
      (res: any) => {
        console.log("list:", res);
        this.list = res;
        if (res.NoOfRecord > 0) {
          this.presentToast(res.Msg.en);
          this.TableList = res.Ds.Table;
          console.log("tablelist", this.TableList);

        }
        else {
          this.presentToast(res.Msg.en);
        }
      },
      (err) => { console.log(err) }
    )
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  openExmDetails(item) {
    this.router.navigateByUrl('/examdetails', { state: item });
  }
  DeleteExam(exm_id: number,index) {
    this.postService.DeleteExam(exm_id).subscribe(
      (res: any) => {

        
        console.log("Deletelist:", res);
        if (res.NoOfRecord > 0) {
          this.presentToast(res.Msg.en);
          //this.TableList = res.Ds.Table;
          console.log("tablelist", this.DeleteList);

          this.DeleteList = this.TableList.splice(index,1);
        }
        else {
          this.presentToast(res.Msg.en);
        }

      },
      (err) => { console.log(err) }
    )
  }
  async PresentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  async doConfirm(_exm_id,index) {
    const confirm = await this.alertctrl.create({
      header: 'Delete!',
      message: 'Are You sure to Delete this?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Okay',
          handler: () => {
            this.DeleteExam(_exm_id,index);
            console.log('Confirm Okay.',_exm_id);
          }
        }
      ]
    });
    await confirm.present();

  }

  

  ngOnInit() {


  }

}
