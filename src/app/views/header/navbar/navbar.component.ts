import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'dcaa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbar = [
    {
      name: 'Home',
      childs: []
    },
    {
      name: 'About Us',
      childs: [{name: 'Sub 1'}, {name: 'Sub 2'}]
    },
    {
      name: 'E-Services',
      childs: []
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
