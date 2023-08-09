import { MarketdataService } from './../services/marketdata.service';
import { Component, OnInit } from '@angular/core';
import { marketData } from '../interfaces/Marketdata';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss'],
})

export class MarketplaceComponent implements OnInit {
  public marketDataObj: marketData[] = [];
  dat: marketData[] = [];
  dd: marketData[] = [];
  str: string = '';
  public d: Array<marketData> = [];
  public market: Array<marketData> = [];
  constructor(private marketDataservice: MarketdataService) {}

  ngOnInit(): void {
    //   this.marketDataservice.getData().subscribe((data:any)=> {this.marketDataObj=data;console.log(data)});
    //   this.marketDataservice.getmarketData().subscribe((data:any)=>{console.log(data);
    //    this.dd=data;
    //    //convert object keys to array
    // var k = Object.keys(data);
    // //convert object values to array
    // var v = Object.values(data);
    // // this.market = Object.keys(data).map(function(personNamedIndex){
    // //   let pe;
    // //   // do something with person
    // //   return person;
    // // });
    // console.log(this.market);

    //    this.d=(Object.values(this.dd));
    //    console.log(this.d);
    //    this.str=JSON.stringify(this.d);
    //    var obj = this.str;
    //    var stringify = JSON.parse(obj);

    //    });

    this.marketDataservice.getData().subscribe((data: any) => {
      this.marketDataObj = data;
      console.log(data);
    });

    this.marketDataservice.getmarketData().subscribe((data: any) => {
      console.log(data);
      this.market = data;
    });
  }
}
