import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'dcaa-starting',
  templateUrl: './starting.component.html',
  styleUrls: ['./starting.component.scss']
})
export class StartingComponent implements OnInit {

  constructor() {
  }

  scrollToWebsite() {
    window.scrollBy({
      top: 400,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit() {
  }

}
