import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-items',
  templateUrl: './side-nav-items.component.html',
  styleUrls: ['./side-nav-items.component.scss'],
})
export class SideNavItemsComponent implements OnInit {
  @Input() navItem: any;
  @Input() imgHeight: any;
  @Input() marginBottom: any;

  constructor() {}

  ngOnInit(): void {}
}
