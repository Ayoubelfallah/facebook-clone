import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  get activeFriends(): User[] {
    return this.userService.users.filter(e => e.active);
  }

}
