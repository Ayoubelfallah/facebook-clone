import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  sideNavActive = false;

  lastItem = {
    item: 'See more',
    img_url: 'assets/see-more.svg',
  };

  toggleSideNav() {
    this.sideNavActive = !this.sideNavActive;

    if (this.sideNavActive) {
      for (let i = 0; i < this.viewMore.length; i++) {
        this.navItems.push(this.viewMore[i]);
      }
      this.lastItem = {
        item: 'See less',
        img_url: 'assets/see-less.svg',
      };
    } else {
      this.navItems = this.navItems.slice(0, 6);
      this.lastItem = {
        item: 'See more',
        img_url: 'assets/see-more.svg',
      };
    }
  }

  navItems = [
    {
      item: 'Mark Zuckerberg',
      img_url:
        'https://yourwikis.com/wp-content/uploads/2020/01/mark-zuck-img.jpg',
    },
    {
      item: 'Friends',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/P3LEV6Y0FCf.png',
    },
    {
      item: 'Groups',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/L2qlIhGe55v.png',
    },
    {
      item: 'Marketplace',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/P82afdZb-gc.png',
    },
    {
      item: 'Watch',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/ob1CgXwDORG.png',
    },
    {
      item: 'Memories',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/24MgFlPfCs5.png',
    },
  ];

  viewMore = [
    {
      item: 'Ad Centre',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/fmToT78-51T.png',
    },
    {
      item: 'Ads Management',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/nd7CyR2WGle.png',
    },
    {
      item: 'Blood Donations',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/xUHsnwbmQ8Y.png',
    },
    {
      item: 'Business Manager',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/yi16DpsqncT.png',
    },
    {
      item: 'Climate Science Centre',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/1QdddKbdW4i.png',
    },
    {
      item: 'Community Help',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/6LdSVr10yjo.png',
    },
    {
      item: 'COVID-19 Information Centre',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/kfSgA-GTBf9.png',
    },
    {
      item: 'Emotional Health',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/Qa07IQGXD4p.png',
    },
    {
      item: 'Events',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/qB7KME4oQ7N.png',
    },
    {
      item: 'Favourites',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/6z6PkjynH7u.png',
    },
    {
      item: 'Fundraisers',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/hZ_wPvPD4VY.png',
    },
    {
      item: 'Gaming video',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/63SCnWduL0m.png',
    },
    {
      item: 'Live videos',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/JA2Qea2fapO.png',
    },
    {
      item: 'Messenger',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/T1kBj3hDJS8.png',
    },
    {
      item: 'Messenger Kids',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/80KoOVGSS1W.png',
    },
    {
      item: 'Most recent',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/FotFk27Ykon.png',
    },
    {
      item: 'Pages',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/TbOx5lWkw-N.png',
    },
    {
      item: 'Play games',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/Rwoc8jeB73K.png',
    },
    {
      item: 'Recent ad activity',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/u6E3qp8lSIK.png',
    },
    {
      item: 'Saved',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/EygD86pCwoD.png',
    },
    {
      item: 'Weather',
      img_url: 'https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/5II62CEPpjX.png',
    },
  ];

  shortcuts = [
    {
      item: 'Candy Crush Saga',
      img_url:
        'https://play-lh.googleusercontent.com/TLUeelx8wcpEzf3hoqeLxPs3ai1tdGtAZTIFkNqy3gbDp1NPpNFTOzSFJDvZ9narFS0=s360-rw',
    },
    {
      item: 'Criminal Case',
      img_url:
        'https://static.wikia.nocookie.net/criminal-case-grimsborough/images/e/ea/App_Icon_%283%29.png',
    },
    {
      item: "Diggy's Adventure",
      img_url:
        'https://static.pixelfederation.com/portal/assets/share/da.png',
    },
  ];
}
