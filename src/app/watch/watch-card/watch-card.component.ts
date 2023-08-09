import { WatchService } from './../../services/watch.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Watch } from 'src/app/interfaces/Watch';
import { Reacted } from 'src/app/interfaces/Reacted';


@Component({
  selector: 'app-watch-card',
  templateUrl: './watch-card.component.html',
  styleUrls: ['./watch-card.component.scss']
})
export class WatchCardComponent implements OnInit {

  watch:Watch[]=[];

  public watchdarr=[];
  str:string="";
 public d:Array<any>=[];
 dict={};


 
  reacted: Reacted[] = [];
  
  constructor(private _sanitizer: DomSanitizer,private WatchService:WatchService) {


  }

  ngOnInit(): void {

  // this.url=this.watchdata[0].video_link
      this.WatchService.getData().subscribe((data:any)=>{console.log(data);
      this.watch=data;
      this.d=(Object.values(this.watch));


      this.str=JSON.stringify(this.d);
      var obj = this.str;
      var stringify = JSON.parse(obj);
      var watcharr=[];
      for (var i = 0; i < stringify.length; i++) {

        //  dict=(stringify[i][0])
        //  console.log(dict);
        this.dict={
          'username':stringify[i]['username'],'user_dp':stringify[i]['user_dp'],
          'video':this._sanitizer.bypassSecurityTrustResourceUrl(stringify[i]['video']),
          'posted_date':stringify[i]['posted_date'],'no_of_like':stringify[i]['no_of_like'],
          'no_of_comments':stringify[i]['no_of_comments'],'no_of_views':stringify[i]['no_of_views']

        };
          // this.ans.push(stringify[i]['name']);
          // this.ans.push(stringify[i]['completed']);


          watcharr.push(this.dict);

          console.log(watcharr);


      }
      this.d=watcharr;
      for (const watch of watcharr) {
        this.reacted.push(new Reacted());
      }

      });
  }




}
