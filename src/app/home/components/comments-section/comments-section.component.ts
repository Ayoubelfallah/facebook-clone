import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comments-section',
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.scss'],
})
export class CommentsSectionComponent implements OnInit {
  @Input() reacted: any;

  @Output() commentActive: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  putLike(){
    if (this.reacted && this.reacted.type)
    {
      this.reacted.name="";
      this.reacted.type="";
    } else {
      this.reacted.type="like";
      this.reacted.name="Like";
    }
  }

  goToComments() {
    this.commentActive.emit();
  }
}
