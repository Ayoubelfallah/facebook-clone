import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name-section',
  templateUrl: './name-section.component.html',
  styleUrls: ['./name-section.component.scss'],
})
export class NameSectionComponent implements OnInit {
  @Input() friendsList: any;
public edit=false;
  constructor() {}

  ngOnInit(): void {}


  isAccountCreationVisible: boolean = false;
  first_name : string = '';
  last_name : string = '';
  email: string = '';
  password: string = '';
  photo: string = '';
  date: string = '';
  birthday: string = '';
  situationFamiliale: string = '';
  ville: string = '';

  toggleAccountCreation() {
    this.isAccountCreationVisible = !this.isAccountCreationVisible;
  }

  submitAccount() {
    // Effectuer les actions nécessaires pour créer le compte
    console.log('first_name:', this.first_name);
    console.log('last_name:', this.last_name);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Photo:', this.photo);
    console.log('Date:', this.date);
    console.log('Birthday:', this.birthday);
    console.log('Situation familiale:', this.situationFamiliale);
    console.log('Ville:', this.ville);

    // Réinitialiser les valeurs des champs
    this.first_name = '';
    this.last_name = '';
    this.email = '';
    this.password = '';
    this.photo = '';
    this.date = '';
    this.birthday = '';
    this.situationFamiliale = '';
    this.ville = '';

    // Masquer l'interface de création de compte
    this.isAccountCreationVisible = false;
  }

  cancelAccountCreation() {
    // Réinitialiser les valeurs des champs
    this.first_name = '';
    this.last_name = '';
    this.email = '';
    this.password = '';
    this.photo = '';
    this.date = '';
    this.birthday = '';
    this.situationFamiliale = '';
    this.ville = '';

    // Masquer l'interface de création de compte
    this.isAccountCreationVisible = false;
  }



  handlePhotoChange(event: any) {
    const file = event.target.files[0];
    // Vous pouvez maintenant faire quelque chose avec le fichier, comme l'envoyer à un serveur ou le prévisualiser dans l'application
    console.log('Nouvelle photo sélectionnée:', file);
  }
  

}
