import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'dcaa-view-register-aircraft',
  templateUrl: './view-register-aircraft.component.html',
  styleUrls: ['./view-register-aircraft.component.scss']
})
export class ViewRegisterAircraftComponent implements OnInit {

  airCraftData = [
    {
      icon: 'Approving-Landing-Fields',
      name: 'BOEING 747-28/ISF',
    },
    {
      icon: 'Approving-Landing-Fields',
      name: 'BOEING 747-28/ISF',
    }, {
      icon: 'Approving-Landing-Fields',
      name: 'BOEING 747-28/ISF',
    }
    , {
      icon: 'Approving-Landing-Fields',
      name: 'BOEING 747-28/ISF',
    }, {
      icon: 'Approving-Landing-Fields',
      name: 'BOEING 747-28/ISF',
    }, {
      icon: 'Approving-Landing-Fields',
      name: 'BOEING 747-28/ISF',
    }, {
      icon: 'Approving-Landing-Fields',
      name: 'BOEING 747-28/ISF',
    }, {
      icon: 'Approving-Landing-Fields',
      name: 'BOEING 747-28/ISF',
    }
  ];

  constructor() {
  }

  ngOnInit() {


  }

}
