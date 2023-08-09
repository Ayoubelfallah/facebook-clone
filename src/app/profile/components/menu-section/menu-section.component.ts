import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.scss'],
})
export class MenuSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isSticky = false;

  @HostListener('window:scroll', ['$event']) onWindowScroll(event: any) {
    if (window.pageYOffset > window.innerHeight - 75) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
}
