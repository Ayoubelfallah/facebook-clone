import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-marketplace',
  templateUrl: './side-nav-marketplace.component.html',
  styleUrls: ['./side-nav-marketplace.component.scss']
})
export class SideNavMarketplaceComponent implements OnInit {
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
  watchSideNav=[];
  marketSideNav=[   {
    item: 'Browse all',
    img_url:'https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/7Z2IH7yE78C.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
    background_position:'-44px -236px',//'0px -630px',
    background_size: '74px 454px',//'26px 1400px',
    arrow_icon:false,
  },
  {
    item: 'Notifications',
    img_url:'https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/-zxyuanMAV5.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
    background_position:'0 -382px',//'0px -630px',
    background_size: '34px 1024px',//'26px 1400px',
    arrow_icon:false,
  },
  {
    item: 'Inbox',
    img_url:'https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/VNac1yDYOXZ.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
    background_position:'0 -620px',//'0px -630px',
    background_size: '34px 1082px',//'26px 1400px',
    arrow_icon:false,
  },
  {
    item: 'Buying',
    img_url:	'https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/85ts4NxRjCa.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
    background_position:'0px -490px',//'0px -630px',
    background_size: '34px 808px',//'26px 1400px',
    arrow_icon:false,
  },
  {
    item: 'Selling',
    img_url:'https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/VNac1yDYOXZ.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
    background_position:'0px -796px',//'0px -630px',
    background_size: '34px 1082px',//'26px 1400px',
    arrow_icon:false,
  }
];
   categoriesData=[ {
    item: 'Vehicles',
    img_url:'	https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/VNac1yDYOXZ.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
    background_position:'0px -400px',//'0px -630px',
    background_size: '34px 1082px',//'26px 1400px',
    arrow_icon:false,
  },
  {
    item: 'Property for rent',
    img_url:'	https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/HKwP8Wj1Tef.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
    background_position:'-22px -168px',//'0px -630px',
    background_size: '64px 300px',//'26px 1400px',
    arrow_icon:false,
  }
  ,
  {
    item: 'Classifieds',
    img_url:'https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/VNac1yDYOXZ.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
    background_position:'0px -796px',//'0px -630px',
    background_size: '34px 1082px',//'26px 1400px',
    arrow_icon:false,
  }
  ,
  {
    item: 'Clothing',
    img_url:'	https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/HKwP8Wj1Tef.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
    background_position:'-22px -234px',//'0px -630px',
    background_size: '64px 300px',//'26px 1400px',
    arrow_icon:false,
  }
  ,
  {
    item: 'Electronics',
    img_url:'	https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/-zxyuanMAV5.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
    background_position:'0px -668px',//'0px -630px',
    background_size: '34px 1024px',//'26px 1400px',
    arrow_icon:false,
  },
  {
    item: 'Enternaiment',
    img_url:'		https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/HKwP8Wj1Tef.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
    background_position:'-22px -146px',//'0px -630px',
    background_size: '64px 300px',//'26px 1400px',
    arrow_icon:false,
  },
  {
    item: 'Family',
    img_url:'	https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/VNac1yDYOXZ.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
    background_position:'0px -598px',//'0px -630px',
    background_size: ' 34px 1082px',//'26px 1400px',
    arrow_icon:false,
  },
  {
    item: 'Free stuff',
    img_url:'	https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/HKwP8Wj1Tef.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
    background_position:'0px -256px',//'0px -630px',
    background_size: '64px 300px',//'26px 1400px',
    arrow_icon:false,
  },
  {
    item: 'Garden and Outdoors',
    img_url:'			https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/HKwP8Wj1Tef.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
    background_position:'0px -278px',//'0px -630px',
    background_size: '64px 300px',//'26px 1400px',
    arrow_icon:false,
  },
  {
    item: 'Hobbies',
    img_url:'		https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/HKwP8Wj1Tef.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
    background_position:'-22px -124px',//'0px -630px',
    background_size: '64px 300px',//'26px 1400px',
    arrow_icon:false,
  },
  {
    item: 'Home goods',
    img_url:'	https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/-zxyuanMAV5.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
    background_position:'0px -580px',//'0px -630px',
    background_size: '34px 1024px',//'26px 1400px',
    arrow_icon:false,
  }
  ,
  {
    item: 'Home improvement supplies',
    img_url:'		https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/HKwP8Wj1Tef.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
    background_position:'-22px -278px',//'0px -630px',
    background_size: '64px 300px',//'26px 1400px',
    arrow_icon:false,
  }
  ,
  {
    item: 'Musical instruments',
    img_url:'		https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/HKwP8Wj1Tef.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
    background_position:'-22px -168px',//'0px -630px',
    background_size: '64px 300px',//'26px 1400px',
    arrow_icon:false,
  }
  ,
  {
    item: 'Office supplies',
    img_url:'	https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/HKwP8Wj1Tef.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
    background_position:'0px -168px',//'0px -630px',
    background_size: '64px 300px',//'26px 1400px',
    arrow_icon:false,
  }
  ,
  {
    item: 'Pet supplies',
    img_url:'		https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/HKwP8Wj1Tef.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
    background_position:'0px -212px',//'0px -630px',
    background_size: '64px 300px',//'26px 1400px',
    arrow_icon:false,
  }
  ,
  {
    item: 'Property for sale',
    img_url:'	https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/HKwP8Wj1Tef.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
    background_position:'-22px -168px',//'0px -630px',
    background_size: '64px 300px',//'26px 1400px',
    arrow_icon:false,
  }
  ,
  {
    item: 'Sporting goods',
    img_url:'		https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/HKwP8Wj1Tef.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
    background_position:'-22px -212px',//'0px -630px',
    background_size: '64px 300px',//'26px 1400px',
    arrow_icon:false,
  },
  {
    item: 'Toys & games',
    img_url:'	https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/-zxyuanMAV5.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
    background_position:'0px -558px',//'0px -630px',
    background_size: '34px 1024px',//'26px 1400px',
    arrow_icon:false,
  }
  ,
  {
    item: 'Buy-and-sell groups',
    img_url:'	https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/HKwP8Wj1Tef.png',//https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/-wm-fqdtvDt.png
    background_position:'0px -558px',//'0px -630px',
    background_size: '34px 1024px',//'26px 1400px',
    arrow_icon:false,
  }
  
]

}
