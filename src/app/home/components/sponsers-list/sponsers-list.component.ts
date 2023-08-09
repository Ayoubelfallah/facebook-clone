import { Component, OnInit } from '@angular/core';
import { Sponser } from 'src/app/interfaces/Sponser';

@Component({
  selector: 'app-sponsers-list',
  templateUrl: './sponsers-list.component.html',
  styleUrls: ['./sponsers-list.component.scss']
})
export class SponsersListComponent implements OnInit {

  sponsers: Sponser[] = [
    {
      imgUrl: 'https://media.istockphoto.com/photos/business-woman-at-office-stock-photo-picture-id1312447731?b=1&k=20&m=1312447731&s=170667a&w=0&h=7Ch3Yci1WYPYjf_B26ddHAM1yysImPstoT1C1tlkkm8=',
      topic: 'Join the most exciting work force ever!',
      link: 'https://example.com/',
    },
    {
      imgUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      topic: 'Head, set, go for boAt',
      link: 'https://example.com/',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
