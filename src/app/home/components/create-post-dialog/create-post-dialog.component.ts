import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { postcard } from 'src/app/interfaces/Postcard';
import { SelfPost } from 'src/app/interfaces/self-post';
import { PostcardService } from 'src/app/services/postcard.service';

@Component({
  selector: 'app-create-post-dialog',
  templateUrl: './create-post-dialog.component.html',
  styleUrls: ['./create-post-dialog.component.scss']
})
export class CreatePostDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreatePostDialogComponent>,public postcardservice:PostcardService,private router: Router) { }
  activeStatus:boolean=false;
  ngOnInit(): void {
  }

  buttonActive(){
    console.log("hello in buttonActive!");
    this.activeStatus=true;
  }
  onNoClick() {
    this.dialogRef.close();
  }

  postData(){
    let text = (document.getElementById('textarea') as HTMLInputElement).value;
    console.log(text);
    //var postDetails={} as SelfPost;
    var postDetails = {} as postcard;
    postDetails.become_friend_1="Vijay";
    postDetails.become_friend_2="Ajith";
    postDetails.comment="";
    postDetails.comment_user_dp="";
    postDetails.comment_user_name="";
    postDetails.imgsrc="";
    postDetails.text=text;
    postDetails.last_seen="active";
    postDetails.mutual_friend_1="1";
    postDetails.mutual_friend_2="2";
    postDetails.no_of_comments="0";
    postDetails.no_of_likes="0";
    postDetails.userdp="https://yourwikis.com/wp-content/uploads/2020/01/mark-zuck-img.jpg";
    postDetails.username="Mark Zuckerberg";

    this.postcardservice.appendData(postDetails).subscribe((data:any)=>{console.log(data);});
    this.postcardservice.setData(postDetails);
    this.onNoClick();
  }

}
