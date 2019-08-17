import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {AuthenticationService} from '../../../services/authentication.service';
import {User} from '../../../classes/user';
import {MatDialog, MatDialogRef} from '@angular/material';
import {LogoutConfirmationComponent} from '../../modals/logout-confirmation/logout-confirmation.component';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    collapsed = false;
    member: User;

    constructor(public _appService: AppService,
                private dialog: MatDialog,
                private authenticationService: AuthenticationService) {
    }

    logout() {
        const dialogRef: MatDialogRef<LogoutConfirmationComponent> = this.dialog.open(LogoutConfirmationComponent,
            {panelClass: 'logout-modal'}
        );
    }

    ngOnInit() {
        this.authenticationService.currentUser.subscribe(member => {
            this.member = member;
        });
    }

}
