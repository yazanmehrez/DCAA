import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'dcaa-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  NavListData = [
    {id: 0, name: 'Overview'},
    {id: 1, name: 'Our Vision & Mission'},
    {id: 2, name: 'Our Roles & Responsibilities'},
    {id: 3, name: 'Our Story'},
    {id: 4, name: 'Organizational Structure'},
    {id: 5, name: 'DCAA Sectors'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
