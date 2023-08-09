import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = 'http://localhost:5000/api/Users';

  users: User[] = [];

  constructor(private http: HttpClient) { }

  fetchUsers() {
    this.http.get(this.baseURL).subscribe(
      res => this.users = res as User[],
      err => console.log(err)
      
    );
  }

}
