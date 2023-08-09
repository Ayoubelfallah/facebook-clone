import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  vidLinks = [
    'https://www.youtube.com/embed/Wrdh5HrOCMc',
    'https://www.youtube.com/embed/QsHWebfAwpY',
    'https://www.youtube.com/embed/hnM8qGvDH60',
  ];

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit(): void {}
}
