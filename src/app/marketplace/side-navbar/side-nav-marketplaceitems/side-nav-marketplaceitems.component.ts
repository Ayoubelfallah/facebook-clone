import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-marketplaceitems',
  templateUrl: './side-nav-marketplaceitems.component.html',
  styleUrls: ['./side-nav-marketplaceitems.component.scss']
})
export class SideNavMarketplaceitemsComponent implements OnInit {
  @Input() sideNav:any;
  constructor() { }

  ngOnInit(): void {
  }

}
