import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  baseURL: string = 'http://localhost:5000/api/';

  friends = [];
  photos = [];

  fetchFriends() {
    this.http.get(this.baseURL + 'ProfileFriends').subscribe(
      (res) => (this.friends = res as []),
      (err) => console.log(err)
    );

    return this.friends;
  }

  fetchPhotos() {
    this.http.get(this.baseURL + 'ProfilePhotoes').subscribe(
      (res) => (this.photos = res as []),
      (err) => console.log(err)
    );

    return this.friends;
  }
}
