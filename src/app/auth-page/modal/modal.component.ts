// import { Component } from '@angular/core';
// import { MatDialogRef } from '@angular/material/dialog';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// interface FormData {
//   first_name: string;
//   date_of_birth: string;
//   email: string;
//   gender: string;
//   last_name: string;
//   password: string;
// }

// @Component({
//   selector: 'app-modal',
//   templateUrl: './modal.component.html',
//   styleUrls: ['./modal.component.scss']
// })
// export class ModalComponent {
//   formData: FormData = {
//     first_name: '',
//     date_of_birth: '',
//     email: '',
//     gender: '',
//     last_name: '',
//     password: '',
//   };

  
//   submitted = false;

//   constructor(private http: HttpClient, public dialogRef: MatDialogRef<ModalComponent>,private router: Router) {}

//   submitForm() {
//     this.submitted = true;

//     if (this.isFormValid()) {
//       const url = 'http://localhost:3000/api/formdata';
//       this.http.post(url, this.formData)
//         .subscribe(
//           response => {
//             console.log('Données enregistrées avec succès.', response);
//             this.router.navigate(['/profile']);
//             this.dialogRef.close();
//           },
//           error => {
//             console.error('Une erreur s\'est produite lors de l\'enregistrement des données.', error);
//           }
//         );
//     }
//   }

//   isFormValid(): boolean {
//     // Vérification des conditions de validation
//     return (
//       this.formData.first_name !== '' &&
//       (this.formData.date_of_birth?.match(/^\d{4}-\d{2}-\d{2}$/) ?? false) &&
//       (this.formData.email?.match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/) ?? false) &&
//       this.formData.gender !== '' &&
//       this.formData.last_name !== '' &&
//       (this.formData.password?.length >= 5 ?? false)
//     );
//   }
  
// }
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface FormData {
  first_name: string;
  date_of_birth: string;
  email: string;
  gender: string;
  last_name: string;
  password: string;
  scolarite: string;
  situation_amoureuse: string;
  ville_actuelle: string;
  ville_origine: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  formData: FormData = {
    first_name: '',
    date_of_birth: '',
    email: '',
    gender: '',
    last_name: '',
    password: '',
    scolarite: '',
    situation_amoureuse: '',
    ville_actuelle: '',
    ville_origine: '',
  };
  selectedImage!: File;
  submitted = false;

  constructor(private http: HttpClient, public dialogRef: MatDialogRef<ModalComponent>, private router: Router) {}

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  submitForm() {
    this.submitted = true;

    if (this.isFormValid()) {
      const url = 'http://localhost:3000/api/formdata';
      const formData = new FormData();
      formData.append('image', this.selectedImage, this.selectedImage.name);
      formData.append('first_name', this.formData.first_name);
      formData.append('date_of_birth', this.formData.date_of_birth);
      formData.append('email', this.formData.email);
      formData.append('gender', this.formData.gender);
      formData.append('last_name', this.formData.last_name);
      formData.append('password', this.formData.password);
      formData.append('scolarite', this.formData.scolarite);
      formData.append('situation_amoureuse', this.formData.situation_amoureuse);
      formData.append('ville_actuelle', this.formData.ville_actuelle);
      formData.append('ville_origine', this.formData.ville_origine);


      this.http.post(url, formData)
        .subscribe(
          response => {
            console.log('Données enregistrées avec succès.', response);
            this.router.navigate(['/profile']);
            this.dialogRef.close();
          },
          error => {
            console.error('Une erreur s\'est produite lors de l\'enregistrement des données.', error);
          }
        );
    }
  }

  isFormValid(): boolean {
    // Vérification des conditions de validation
    return (
      this.formData.first_name !== '' &&
      (this.formData.date_of_birth?.match(/^\d{4}-\d{2}-\d{2}$/) ?? false) &&
      (this.formData.email?.match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/) ?? false) &&
      this.formData.gender !== '' &&
      this.formData.last_name !== '' &&
      (this.formData.password?.length >= 5 ?? false)
    );
  }
  
}
