import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {AuthenticationService} from '../../../services/authentication.service';
import {User} from '../../../classes/user';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    collapsed = false;
    member: User;

    constructor(public _appService: AppService,
                private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.authenticationService.currentUser.subscribe(member => {
            this.member = member;
        });
    }

}
