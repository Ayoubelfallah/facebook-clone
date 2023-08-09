import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-games',
  templateUrl: './featured-games.component.html',
  styleUrls: ['./featured-games.component.scss'],
})
export class FeaturedGamesComponent implements OnInit {
  games = [
    {
      name: 'Minecraft',
      img: 'https://dkofva0t6jnyn.cloudfront.net/sites/default/files/styles/amp_blog_image_large/public/consumer/blog/parentsultimateguide-minecraft-blog.jpeg',
      genre: 'Adventure',
    },
    {
      name: 'Valorant',
      img: 'https://www.riotgames.com/darkroom/1000/9b3da9b650454646cf2a52a1635d5fe2:951146e9be67f6b31f556f888d7ac5a0/beta-key-art-valorant.jpg',
      genre: 'FPS',
    },
    {
      name: 'League of Legends',
      img: 'https://assets-prd.ignimgs.com/2021/11/19/arcaneseasonone-blogroll-1637364360923.jpg',
      genre: 'Online',
    },
    {
      name: 'Elden ring',
      img: 'https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/2odx6gpsgR6qQ16YZ7YkEt2B.png',
      genre: 'Online',
    },
    {
      name: 'Destiny',
      img: 'https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg',
      genre: 'FPS',
    },
    {
      name: 'GTA V',
      img: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png',
      genre: 'Adventure',
    },
    {
      name: 'Rea Dead Redemption',
      img: 'https://media.rockstargames.com/rockstargames-newsite/uploads/d5c7e4dcecb612368aee64978f183250b6e643fe.jpg',
      genre: 'Adventure',
    },
    {
      name: 'Skyrim',
      img: 'https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png',
      genre: 'Action',
    },
    {
      name: 'Halo Infinite',
      img: 'https://upload.wikimedia.org/wikipedia/en/1/14/Halo_Infinite.png',
      genre: 'Shooting',
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
