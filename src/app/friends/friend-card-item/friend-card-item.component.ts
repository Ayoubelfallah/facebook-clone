import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Status } from 'src/app/interfaces/status';


@Component({
  selector: 'app-friend-card-item',
  templateUrl: './friend-card-item.component.html',
  styleUrls: ['./friend-card-item.component.scss']
})
export class FriendCardItemComponent implements OnInit {

  @Input() friendrequest:any;
  @Input() button1:any;
  @Input() button2:any;
  @Output() ItemEvent= new EventEmitter<string>();
  @Output() acceptStatus = new EventEmitter<Status>();
  update={} as Status;
  friendsList:string='';
  openDescription:boolean = false;
  constructor() {
  }

  ngOnInit(): void {
    this.friendsList=this.friendrequest.friends_name;//.join("\n");
   // console.log(this.friendsList);
  }
  removeElement(friendrequest:string){
    console.log(friendrequest);
    this.ItemEvent.emit(friendrequest);
  }
  addFriend(name:string,status:string){
    this.update.name=name;
    this.update.status= (status==='yes') ? 'Request sent': 'Request cancelled';
    console.log("In child : "+this.update.name+" "+this.update.status);
    this.acceptStatus.emit(this.update);
  }
  mouseEnter(){
   this.openDescription=true;
  }
  mouseLeave(){
    this.openDescription=false;
  }
}
