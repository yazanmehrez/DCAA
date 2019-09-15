import {Component, OnInit} from '@angular/core';
import {slideInOut} from '../../../animations/slideInOut';


@Component({
    selector: 'dcaa-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: [slideInOut]
})
export class HeaderComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

    }

}
