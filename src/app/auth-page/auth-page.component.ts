import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface login {
  email: string;
  password: string;
}
@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  login: any = {
    email: '',
    password: ''
  };

  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {}

  openModel() {
    let createModal = document.getElementById('createModal');
    if (createModal) {
      createModal.classList.add('show');
      createModal.style.display = 'block';
      createModal.style.opacity = '1';
      let bodyElement = document.querySelector(".body");
      console.log(bodyElement);
    }

    console.log("I'm in - " + createModal);
    this.dialog.open(ModalComponent, {
      width: '500px',
      height: '70vh'
    });
  }
  
  submitForm(): void {
    const url = 'http://localhost:3000/api/login';
    this.http.post(url, this.login).subscribe(
      (response: any) => {
        console.log('authentification reussis', response);
        this.router.navigate(['/profile']);
      },
      (error: any) => {
        console.error('authentification echoues.', error);
      }
    );
  }
}