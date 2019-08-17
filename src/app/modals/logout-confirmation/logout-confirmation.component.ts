import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
    selector: 'app-logout-confirmation',
    templateUrl: './logout-confirmation.component.html',
    styleUrls: ['./logout-confirmation.component.scss']
})
export class LogoutConfirmationComponent implements OnInit {

    constructor(public dialog: MatDialog, private authenticationService: AuthenticationService) {
    }

    logout() {
        this.authenticationService.logout();
        this.dialog.closeAll();
    }

    ngOnInit() {
    }

}
