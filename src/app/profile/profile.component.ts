import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(public profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.fetchFriends();
  }

  get friendsList() {
    return this.profileService.friends;
  }

  // friendsList = [
  //   {
  //     name: 'Burn Abasse',
  //     img: 'https://randomuser.me/api/portraits/men/23.jpg',
  //   },
  //   {
  //     name: 'Neab Mey',
  //     img: 'https://randomuser.me/api/portraits/men/27.jpg',
  //   },
  //   {
  //     name: 'Ogbulata Rolly B Roland',
  //     img: 'https://randomuser.me/api/portraits/men/22.jpg',
  //   },
  //   {
  //     name: 'Machaba Marceloovoid',
  //     img: 'https://randomuser.me/api/portraits/men/52.jpg',
  //   },
  //   {
  //     name: 'Rubengod de Luque',
  //     img: 'https://randomuser.me/api/portraits/men/67.jpg',
  //   },
  //   {
  //     name: 'Sangkut Susanti',
  //     img: 'https://randomuser.me/api/portraits/men/39.jpg',
  //   },
  //   {
  //     name: 'Kazol Kazol',
  //     img: 'https://randomuser.me/api/portraits/men/81.jpg',
  //   },
  //   {
  //     name: 'LƯU NGUYÊN',
  //     img: 'https://randomuser.me/api/portraits/men/80.jpg',
  //   },
  //   {
  //     name: 'Yeen Prc',
  //     img: 'https://randomuser.me/api/portraits/men/61.jpg',
  //   },
  // ];
}
