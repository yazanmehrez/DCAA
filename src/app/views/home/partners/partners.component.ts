import {AfterViewInit, Component} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
  selector: 'dcaa-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements AfterViewInit {
  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    centeredSlides: true,
    slidesPerView: 7,
    autoplay: true,
    spaceBetween: 30,
    loop: true
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
