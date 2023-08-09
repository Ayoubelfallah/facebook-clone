import { Component, OnInit } from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service';
import { Friends } from '../../interfaces/friends';
import { Status } from '../../interfaces/status';

@Component({
  selector: 'app-friend-cards',
  templateUrl: './friend-cards.component.html',
  styleUrls: ['./friend-cards.component.scss']
})
export class FriendCardsComponent implements OnInit {

  constructor(private friendservice:FriendsService) {

  }

  ngOnInit(): void {
    this.friendservice.fetchFriendRequest();
    this.friendservice.fetchFriendSuggestions();
  }

  get friendrequest(): Friends[] {
    return this.friendservice.friendRequest;
  }

  get suggested(): Friends[]{
    return this.friendservice.suggested;
  }

  removeItem(friend:string){
    this.friendrequest.forEach((value,index)=>{
      console.log("In parent : "+value.name);
      if(value.name===friend)     this.friendrequest.splice(index,1);
    });
  }
  removeSuggest(friend:string){
    this.suggested.forEach((value,index)=>{
      console.log("In parent : "+value.name);
      if(value.name===friend)     this.suggested.splice(index,1);
    });
  }
  updateStatus(stat:Status){
    console.log("In parent : "+stat.name+" "+stat.status);
    this.friendrequest.forEach((value,index)=>{
      if(value.name===stat.name)
        this.friendrequest[index].accept=(stat.status==='Request sent')?'Request accepted':stat.status;
    })
    this.suggested.forEach((value,index)=>{
      if(value.name===stat.name) this.suggested[index].accept=stat.status;
    })
  }
}
