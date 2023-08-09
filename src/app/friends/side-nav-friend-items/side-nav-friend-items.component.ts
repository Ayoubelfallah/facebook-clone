import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-friend-items',
  templateUrl: './side-nav-friend-items.component.html',
  styleUrls: ['./side-nav-friend-items.component.scss']
})
export class SideNavFriendItemsComponent implements OnInit {

  @Input() sideNav:any;
  constructor() { }

  ngOnInit(): void {
  }

}
