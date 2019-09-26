import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ApiService} from '../../../services/api.service';
import {AppService} from '../../app.service';

@Component({
  selector: 'dcaa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private dialog: MatDialog, private api: ApiService, private _appService: AppService) {
  }

  ngOnInit() {
    const home = document.getElementsByTagName('dcaa-home')[0];
    const navbar = document.getElementsByClassName('main-nav')[0];
    const accessibility = document.getElementsByClassName('accessibility')[0];
    home.classList.add('dcaa-home');
    navbar.classList.add('home-nav');
    accessibility.classList.add('home-accessibility');

    this._appService.isHome = true;
  }

  ngOnDestroy() {
    const home = document.getElementsByTagName('dcaa-home')[0];
    const navbar = document.getElementsByClassName('main-nav')[0];
    const accessibility = document.getElementsByClassName('accessibility')[0];
    home.classList.remove('dcaa-home');
    navbar.classList.remove('home-nav');
    accessibility.classList.remove('home-accessibility');

    this._appService.isHome = false;
  }

}
