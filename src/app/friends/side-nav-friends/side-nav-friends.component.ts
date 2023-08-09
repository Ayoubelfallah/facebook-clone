import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-friends',
  templateUrl: './side-nav-friends.component.html',
  styleUrls: ['./side-nav-friends.component.scss']
})
export class SideNavFriendsComponent implements OnInit {

  @Input() data:string="";
  constructor() { }

  ngOnInit(): void {
  }
  friendSideNav=[
    {
      item: 'Home',
      img_url:'https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/qtKPMKHkVql.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
      background_position:'0px -482px',//'0px -630px',
      background_size: '26px 1106px',//'26px 1400px',
      arrow_icon:false,
    },
    {
      item: 'Friend requests',
      img_url:'https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/BOAdEL6ATjb.png',
      background_position:'0px -96px',
      background_size: '26px 338px',
      arrow_icon:true,
    },
    {
      item: 'Suggestions',
      img_url:'https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png',
      background_position:'0px -608px',
      background_size: '26px 1400px',
      arrow_icon:true,
    },
    {
      item: 'All Friends',
      img_url:'https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/BOAdEL6ATjb.png',
      background_position:'0px -74px',
      background_size: '26px 338px',
      arrow_icon:true,
    },
    {
      item: 'Birthdays',
      img_url:'https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/BOAdEL6ATjb.png',
      background_position:'0px -118px',
      background_size: '26px 338px',
      arrow_icon:false,
    },
    {
      item:'Custom lists',
      img_url:'https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/BOAdEL6ATjb.png',
      background_position:'0px -74px',
      background_size: '26px 338px',
      arrow_icon:true,
    }
  ]
  //watch side navbar
  watchSideNav=[
    {
      item: 'Home',
      img_url:'https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/qtKPMKHkVql.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
      background_position:'0px -482px',//'0px -630px',
      background_size: '26px 1106px',//'26px 1400px',
      arrow_icon:false,
    },
    {
      item: 'Live',
      img_url:'https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/QsYISwis8MQ.png',
      background_position:'0px -261px',
      background_size: 'auto',
      arrow_icon:true,
    },
    {
      item: 'Shows',
      img_url:'https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/QsYISwis8MQ.png',
      background_position:'0px -282px',
      background_size: 'auto',
      arrow_icon:true,
    },
    {
      item: 'Saved Items  ',
      img_url:'https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/QsYISwis8MQ.png',
      background_position:'0px -240px',
      background_size: 'auto',
      arrow_icon:true,
    },

  ];

  gamingSideNav=[
    {
      item: 'For you',
      img_url:'https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/2lppLqceUSM.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
      background_position:'0px -304px',//'0px -630px',
      background_size: 'auto',//'26px 1400px',
      arrow_icon:false,
    },
    {
      item: 'Video',
      img_url:'https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/QsYISwis8MQ.png',
      background_position:'0px -261px',
      background_size: 'auto',
      arrow_icon:true,
    },
    {
      item: 'Tournaments',
      img_url:'https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/RH2eOrQgvUa.png',
      background_position:'0px -84px',
      background_size: 'auto',
      arrow_icon:true,
    },
    {
      item: 'Play Games  ',
      img_url:'https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/MoijRk0G5SA.png',
      background_position:'0px -531px',
      background_size: 'auto',
      arrow_icon:true,
    },
  ];

}


