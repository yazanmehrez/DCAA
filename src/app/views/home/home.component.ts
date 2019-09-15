import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ApiService} from '../../../services/api.service';

@Component({
    selector: 'dcaa-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private dialog: MatDialog, private api: ApiService) {
    }

    ngOnInit() {

    }

}
