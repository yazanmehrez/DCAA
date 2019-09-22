import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'dcaa-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services = [
    {
      id: 0,
      description: 'Landing Permits',
      icon: 'Landing-Permits',
      categories: []
    },
    {
      id: 1,
      description: 'Issuance Permits for Aviation Safety Operations',
      icon: 'Aviation-Safety-Operations',
      categories: [
        {id: 0, description: 'Commercial aircraft landing field', icon: 'Commercial-aircraft-landing-field'},
        {id: 1, description: 'Commercial Heliport', icon: 'Commercial-Heliport'},
        {id: 2, description: 'Landing field for sports aircraft', icon: 'Landing-field-for-sports-aircraft'},
        {id: 3, description: 'Non-commercial aircraft landing field', icon: 'Non-commercial-aircraft-landing-field'},
        {id: 4, description: 'Non-commercial Heliport', icon: 'Non-commercial-Heliport'}
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

  categories = [];

  constructor() {
  }

  selectCategory(selectedCategory) {
    this.categories = selectedCategory;
  }

  ngOnInit() {
  }

}
