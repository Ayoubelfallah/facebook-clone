import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { marketData } from '../interfaces/Marketdata';

@Injectable({
  providedIn: 'root',
})
export class MarketdataService {
  private _url: string = '/assets/data/verb.json';
  //dependency injection
  constructor(private http: HttpClient) {}
  //the asynchronus data type returned from the http endpoint is Observable
  getData(): Observable<marketData[]> {
    return this.http.get<marketData[]>(this._url);
  }

  getmarketData(): Observable<any> {
    // return this.http.get<any>("https://facebook-ui-clone-2d854-default-rtdb.firebaseio.com/marketplace/personal/bike/demo.json/");
    return this.http.get<any>('http://localhost:5000/api/Market');
  }
}
