import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'dcaa-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  NavListData = [
    {id: 0, name: 'Overview', link: 'overview', linkType: 'route'},
    {id: 4, name: 'Organizational Structure', link: 'organizational-structure', linkType: 'route'},
    {id: 5, name: 'DCAA Sectors', link: 'sectors', linkType: 'route'},
    {id: 6, name: 'DCAA Strategies', link: 'strategies', linkType: 'route'},
    {id: 7, name: 'Annual Book 2016', link: 'pdf', linkType: 'tab'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
