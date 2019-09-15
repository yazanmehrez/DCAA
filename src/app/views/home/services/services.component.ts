import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'dcaa-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() {
  }

  SwingIn(event) {
    if (event.target.getElementsByTagName('svg-icon')[0]) {
      event.target.getElementsByTagName('svg-icon')[0].classList.add('swing', 'colored');
    }
  }

  SwingOut(event) {
    if (event.target.getElementsByTagName('svg-icon')[0]) {
      event.target.getElementsByTagName('svg-icon')[0].classList.remove('swing', 'colored');
    }
  }

  ngOnInit() {
  }

}
