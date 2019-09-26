import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'dcaa-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss']
})
export class MobileNavbarComponent implements OnInit {

  constructor() {
  }

  closeNavbar() {
    $('body').css('overflow', 'auto');
    $('#mobileOverlay').removeClass('show-overlay');
    $('#mobileNavbar').removeClass('collapse show').hide();
  }

  ngOnInit() {
  }

}
