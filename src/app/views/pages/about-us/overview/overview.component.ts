import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'dcaa-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
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
