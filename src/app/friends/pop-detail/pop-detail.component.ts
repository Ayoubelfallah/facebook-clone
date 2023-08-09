import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-detail',
  templateUrl: './pop-detail.component.html',
  styleUrls: ['./pop-detail.component.scss']
})
export class PopDetailComponent implements OnInit {

  @Input() details:any;

  constructor() { }

  ngOnInit(): void {
  }

}
