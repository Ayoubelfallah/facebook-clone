import { Component, OnInit } from '@angular/core';
export interface story {
  name: string;
  avatarImg: string;
  cardImg: string;
}
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {
  storyList: story[] = [
    {
      name: 'Akil Kalyanaraman',
      avatarImg: 'assets/images/profile1.jpg',
      cardImg: 'https://source.unsplash.com/random/2',
    },
    {
      name: 'Subbu Subramaniyan',
      avatarImg: 'assets/images/profile2.jpg',
      cardImg: 'https://source.unsplash.com/random/3',
    },
    {
      name: 'Priyanka Saksena',
      avatarImg: 'assets/images/profile3.jpg',
      cardImg: 'https://source.unsplash.com/random/4',
    },
    {
      name: 'Jerry Sebastian',
      avatarImg: 'assets/images/profile4.jpg',
      cardImg: 'https://source.unsplash.com/random/5',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
