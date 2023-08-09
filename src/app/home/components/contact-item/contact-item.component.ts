import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {

  @Input() friend: User = {
    name: '',
    profileImg: '',
    active: false,
    mutual: 0,
  };

  constructor() { }

  ngOnInit(): void {
  }

}

