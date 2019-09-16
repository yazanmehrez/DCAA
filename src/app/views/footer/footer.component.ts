import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'dcaa-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  imageArray = [{src: 'assets/images/SLIDER MAIN.png'}, {src: 'assets/images/SLIDER MAIN.png'}, {src: 'assets/images/SLIDER MAIN.png'}];

  constructor() {
  }

  ngOnInit() {

  }

}
