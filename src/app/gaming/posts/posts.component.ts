import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Reacted } from 'src/app/interfaces/Reacted';

@Component({
  selector: 'app-gaming-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  // posts: { name: string; game: string; date: string; vidUrl: string }[] = [
  //   {
  //     name: 'name1',
  //     game: 'game1',
  //     date: 'Feb 1',
  //     vidUrl: 'https://www.youtube.com/embed/p4QG59y6FGE',
  //   },
  //   {
  //     name: 'name2',
  //     game: 'game2',
  //     date: 'Feb 2',
  //     vidUrl: 'https://www.youtube.com/embed/-dCIPjxH3wU',
  //   },
  //   {
  //     name: 'name3',
  //     game: 'game3',
  //     date: 'Feb 3',
  //     vidUrl: 'https://www.youtube.com/embed/uIt298IgFhk',
  //   },
  // ];

  //safePosts: { name: string; game: string; date: string; vidUrl: SafeUrl }[];

  reacted: Reacted[] = [
    new Reacted(),
    new Reacted(),
    new Reacted(),
  ];

  constructor(public sanitizer: DomSanitizer) {
    // this.safePosts = this.posts.map((post) => {
    //   return {
    //     name: post.name,
    //     game: post.game,
    //     date: post.date,
    //     vidUrl: this.sanitizer.bypassSecurityTrustUrl(post.vidUrl),
    //   };
    // });
  }

  ngOnInit(): void {}
}
