import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // public/private/protected 
  public baseUrl = "https://jsonplaceholder.typicode.com/";
  public getPost = this.baseUrl+'posts';
  public getComment =this.baseUrl+'posts';
  

  constructor(private httpClient: HttpClient) { }

  getAllPost(){
    return this.httpClient.get(this.getPost);
  }
  getSinglePost(id){
    return this.httpClient.get(this.getPost+'/'+id);
  }
  getSingleComment(id){
    return this.httpClient.get(this.getComment+'/'+id+'/comments');
  }


  // Code learning for post 
  // this.serviceName.demoPostMethod(keyword,fromDate,toDate) // inside page
  //  .subscribe((res)=>{
  //  },(err)=>{
  //  })
  demoPostMethod(keyword,fromDate,toDate){
    let body = new FormData()
    body.set('keyword',keyword)
    body.set('FromDate',fromDate)
    body.set('ToDate',toDate)
    
   return this.httpClient.post('htpps//',body)
  }

  // Code learning for post method
  // this.serviceName.InsertExamDetails(JSON.stringify(data)) // inside page
  //  .subscribe((res)=>{
  //  },(err)=>{
  //  })
  InsertExamDetails(jsondataHdr){
    let body = new FormData()
    body.set('jsondataHdr',jsondataHdr)
    
    return this.httpClient.post(' https://sblmagico.com/EXAMMMH/New/Exam/InsertExamDetails',body)
  }
}
