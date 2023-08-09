import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover-section',
  templateUrl: './cover-section.component.html',
  styleUrls: ['./cover-section.component.scss'],
})
export class CoverSectionComponent implements OnInit {
  constructor() {}

  editMenu = false;

  ngOnInit(): void {}

  toggleEditMenu() {
    this.editMenu = !this.editMenu;
  }

  @HostListener('document:click', ['$event']) onDocumentClick(event: any) {
    if (!event.target.closest('.edit-cover-img')) {
      this.editMenu = false;
    }
  }
  handlePhotoChange(event: any) {
    const file = event.target.files[0];
    // Vous pouvez maintenant faire quelque chose avec le fichier, comme l'envoyer à un serveur ou le prévisualiser dans l'application
    console.log('Nouvelle photo sélectionnée:', file);
  }
}
