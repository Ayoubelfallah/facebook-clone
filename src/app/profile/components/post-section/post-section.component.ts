import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatePostDialogComponent } from 'src/app/home/components/create-post-dialog/create-post-dialog.component';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-post-section',
  templateUrl: './post-section.component.html',
  styleUrls: ['./post-section.component.scss'],
})
export class PostSectionComponent implements OnInit {
  @Input() friendsList: any;

  constructor(public dialog: MatDialog, public profileService: ProfileService) {
    this.profileService.fetchPhotos();
  }

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(CreatePostDialogComponent, {
      width: '500px',
      height: '75vh',
    });
  }

  profileBio = 'Bringing the world closer together.';
  profileBioEdited = '';
  canEditBio = false;

  editBio() {
    this.canEditBio = true;
    this.profileBioEdited = this.profileBio;
  }

  cancelBio() {
    this.canEditBio = false;
    this.profileBioEdited = '';
  }

  saveBio() {
    this.profileBio = this.profileBioEdited;
    this.canEditBio = false;
  }

  get photos() {
    return this.profileService.photos;
  }

  // photos = [
  //   'https://randomuser.me/api/portraits/men/4.jpg',
  //   'https://randomuser.me/api/portraits/men/88.jpg',
  //   'https://randomuser.me/api/portraits/men/66.jpg',
  //   'https://randomuser.me/api/portraits/men/62.jpg',
  //   'https://randomuser.me/api/portraits/men/90.jpg',
  //   'https://randomuser.me/api/portraits/men/49.jpg',
  //   'https://randomuser.me/api/portraits/men/24.jpg',
  //   'https://randomuser.me/api/portraits/men/55.jpg',
  //   'https://randomuser.me/api/portraits/men/82.jpg',
  // ];

  feeds = [
    {
      timeline: {
        birthday: [
          {
            name: 'Burn Abasse',
            text: 'Happy Birthday',
            img: 'https://randomuser.me/api/portraits/men/23.jpg',
            date: '14 May 2021',
            to: 'Mark Zuckerberg',
            reactions: [
              {
                name: 'You',
                type: 'love',
              },
              {
                name: 'Neab Mey',
                type: 'like',
              },
            ],
            reacted: {
              name: 'Love',
              type: 'love',
            },
            comments: [
              {
                name: 'Mark Zukerberg',
                text: 'Thank you',
                img: 'https://yourwikis.com/wp-content/uploads/2020/01/mark-zuck-img.jpg',
              },
              {
                name: 'Neab Mey',
                text: 'Happy Birthday Mark',
                img: 'https://randomuser.me/api/portraits/men/27.jpg',
              },
            ],
          },
          {
            name: 'Ogbulata Rolly B Roland',
            text: 'Happy Birthday have a great day',
            img: 'https://randomuser.me/api/portraits/men/22.jpg',
            date: '14 May 2021',
            to: 'Mark Zuckerberg',
            reactions: [
              {
                name: 'You',
                type: 'like',
              },
            ],
            reacted: {
              name: 'Like',
              type: 'like',
            },
            comments: [],
          },
        ],
      },
    },
  ];
}
