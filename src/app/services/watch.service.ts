import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WatchService {

  constructor(private http:HttpClient) { }
  getData():Observable<any>{
    return this.http.get<any>("http://localhost:5000/api/watches");
  }
}
