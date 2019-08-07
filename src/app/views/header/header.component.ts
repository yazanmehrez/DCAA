import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    collapsed = false;
    constructor(public _appService: AppService) {
    }

    ngOnInit() {
    }

}
