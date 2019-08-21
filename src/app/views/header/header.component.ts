import {Component, OnInit} from '@angular/core';
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

    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.authenticationService.currentUser.subscribe(member => {
            this.member = member;
        });
    }

    collapseChange(event) {
        this.collapsed = event;
    }

    lockCollapsed() {
        const header = document.getElementsByTagName('header')[0];
        header.classList.toggle('lock-collapsed');
    }
}
