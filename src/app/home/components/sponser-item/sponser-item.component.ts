import { Component, Input, OnInit } from '@angular/core';
import { Sponser } from 'src/app/interfaces/Sponser';

@Component({
  selector: 'app-sponser-item',
  templateUrl: './sponser-item.component.html',
  styleUrls: ['./sponser-item.component.scss']
})
export class SponserItemComponent implements OnInit {

  @Input() sponser: Sponser = {
    imgUrl: '',
    topic: '',
    link: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  goToLink() {
    window.open(this.sponser.link, '_blank');
  }

}
