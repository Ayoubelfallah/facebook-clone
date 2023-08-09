import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Friends } from '../interfaces/friends';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  firebaseURL:string = 'http://localhost:5000/api/FriendLists'; //'https://facebook-clone-ui-d3878-default-rtdb.firebaseio.com/friendsRequest.json';

  friendRequest:Friends[] =[];//this.fetchUsers();
  suggested:Friends[]=[];

  constructor(private http: HttpClient) { }

  fetchFriendRequest(){
    this.http.get(this.firebaseURL).subscribe(
      res => this.friendRequest = Object.values(res),
      err => console.log(err)
    );
  }
  fetchFriendSuggestions(){
    this.http.get('http://localhost:5000/api/FriendSuggestions').subscribe(
      res => this.suggested = Object.values(res),
      err => console.log(err)
    );
  }

}
