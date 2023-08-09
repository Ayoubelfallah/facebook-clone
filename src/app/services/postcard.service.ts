import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SelfPost } from '../interfaces/self-post';

import { postcard } from '../interfaces/Postcard';

@Injectable({
  providedIn: 'root'
})
export class PostcardService {

 // data:boolean=false;
  data = new Subject<postcard>();
  dataMsg = this.data.asObservable();


  setData(data:postcard)
  {
    this.data.next(data);
  }
  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get<any>("http://localhost:5000/api/Posts");
  }
  appendData(postDetails:SelfPost):Observable<any>{
    console.log("In post service post method "+postDetails.username);
    return this.http.post('http://localhost:5000/api/Posts',postDetails);
  }
}
