import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamformService {
  public baseUrl="https://sblmagico.com/EXAMMMH/New/Exam/";
  public getInsertExamDetails=this.baseUrl+'InsertExamDetails';
  public getGetExamList=this.baseUrl+'GetExamList';
  public getDeleteExam=this.baseUrl+'DeleteExam';
  public getGetExamDetails=this.baseUrl+'GetExamDetails';


  constructor(private httpClient: HttpClient) { }

  InsertExamDetails(jsondataHdr){
    let body = new FormData()
    body.set('jsondataHdr',jsondataHdr)
    
    return this.httpClient.post(this.getInsertExamDetails,body)
  }
  GetExamList(keyword,FromDate,ToDate){
    let body=new FormData()
    body.set('keyword',keyword)
    body.set('FromDate',FromDate)
    body.set('ToDate',ToDate)

    return this.httpClient.post(this.getGetExamList,body)

  }
  DeleteExam(exm_id){
    let body=new FormData()
    body.set('exm_id',exm_id)

    return this.httpClient.post(this.getDeleteExam,body)
  }
  GetExamDetails(exm_id){
    let body=new FormData()
    body.set('exm_id',exm_id)

    return this.httpClient.post(this.getGetExamDetails,body)    

  }

}
