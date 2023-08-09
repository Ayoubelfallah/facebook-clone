import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-nav-title',
  templateUrl: './right-nav-title.component.html',
  styleUrls: ['./right-nav-title.component.scss']
})
export class RightNavTitleComponent implements OnInit {

  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
