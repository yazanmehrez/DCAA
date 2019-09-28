import { Component, OnInit } from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
  selector: 'dcaa-most-viewed-services',
  templateUrl: './most-viewed-services.component.html',
  styleUrls: ['./most-viewed-services.component.scss']
})
export class MostViewedServicesComponent implements OnInit {
  services = [
    {
      id: 0,
      layoutType: 1,
      description: 'Landing Permits',
      icon: 'Landing-Permits',
      categories: [
        {id: 0, description: 'Commercial aircraft landing field', icon: 'Commercial-aircraft-landing-field'},
        {id: 1, description: 'Commercial Heliport', icon: 'Commercial-Heliport'},
        {id: 2, description: 'Landing field for sports aircraft', icon: 'Landing-field-for-sports-aircraft'},
        {id: 3, description: 'Non-commercial aircraft landing field', icon: 'Non-commercial-aircraft-landing-field'},
        {id: 4, description: 'Non-commercial Heliport', icon: 'Non-commercial-Heliport'}
      ]
    },
    {
      id: 1,
      layoutType: 2,
      description: 'Issuance Permits for Aviation Safety Operations',
      icon: 'Aviation-Safety-Operations',
      categories: [
        {id: 0, description: 'Commercial aircraft landing field', icon: 'Commercial-aircraft-landing-field'},
        {id: 1, description: 'Commercial Heliport', icon: 'Commercial-Heliport'},
        {id: 2, description: 'Landing field for sports aircraft', icon: 'Landing-field-for-sports-aircraft'},
        {id: 3, description: 'Non-commercial aircraft landing field', icon: 'Non-commercial-aircraft-landing-field'},
        {id: 4, description: 'Non-commercial aircraft landing field', icon: 'Non-commercial-aircraft-landing-field'},
        {id: 5, description: 'Non-commercial aircraft landing field', icon: 'Non-commercial-aircraft-landing-field'},
        {id: 6, description: 'Non-commercial aircraft landing field', icon: 'Non-commercial-aircraft-landing-field'},
        {id: 7, description: 'Non-commercial aircraft landing field', icon: 'Non-commercial-aircraft-landing-field'},
        {id: 8, description: 'Non-commercial Heliport', icon: 'Non-commercial-Heliport'}
      ]
    },
    {
      id: 2,
      description: 'Issuance of No objection Certificate for Dangerous Goods and Fire Airs',
      icon: 'Dangerous-Goods',
      categories: []
    },
    {
      id: 3,
      description: 'Permits for Aviation-related Activities',
      icon: 'Aviation-related-Activities',
      categories: []
    },
    {
      id: 4,
      description: 'Building Constructions or Elevation Permits',
      icon: 'Building-Constructions',
      categories: []
    },
    {
      id: 5,
      description: 'Approving Landing Fields',
      icon: 'Approving-Landing-Fields',
      categories: []
    }
  ];
  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    centeredSlides: true,
    slidesPerView: 5,
    autoplay: false,
    spaceBetween: 30,
    loop: true
  };
  constructor() { }

  ngOnInit() {
  }

}
