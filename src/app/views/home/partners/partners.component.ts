import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'dcaa-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements AfterViewInit {
  slideConfig = {
    'slidesToShow': 7,
    'slidesToScroll': 1,
    'dots': false,
    'infinite': false,
    'autoplay': true,
    'arrows': false,
    'autoplaySpeed': 1500
  };
  partners = [
    'assets/images/footer/al ameen.png',
    'assets/images/footer/ask.png',
    'assets/images/footer/complain.png',
    'assets/images/footer/dubai career.png',
    'assets/images/footer/e-suggest-logo.png',
    'assets/images/footer/expo 2020.png',
    'assets/images/footer/gov ae.png',
    'assets/images/footer/mmrz.png',
    'assets/images/footer/smart dubai.png',
  ];

  constructor() {
  }

  ngAfterViewInit() {
  }
}
