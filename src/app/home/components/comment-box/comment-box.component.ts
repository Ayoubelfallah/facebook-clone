import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/Comment';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit {

  @Input() comments: Comment[] = [];
  commentText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addComment() {
    if(this.commentText) {
      const comment: Comment = {
        img: 'https://yourwikis.com/wp-content/uploads/2020/01/mark-zuck-img.jpg',
        name: 'Mark Zuckerberg',
        text: this.commentText
      }
      this.comments.push(comment);
      this.commentText = '';
    }
  }

}
