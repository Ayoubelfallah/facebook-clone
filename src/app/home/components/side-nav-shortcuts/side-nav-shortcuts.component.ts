import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav-shortcuts',
  templateUrl: './side-nav-shortcuts.component.html',
  styleUrls: ['./side-nav-shortcuts.component.scss'],
})
export class SideNavShortcutsComponent implements OnInit {
  @Input() shortcuts: any;

  constructor() {}

  ngOnInit(): void {}
}
