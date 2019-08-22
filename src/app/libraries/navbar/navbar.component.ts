import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {AppService} from '../../app.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {LogoutConfirmationComponent} from '../../modals/logout-confirmation/logout-confirmation.component';
import {slideInOut} from '../../../animations/slideInOut';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    animations: [slideInOut]
})

export class NavbarComponent implements OnChanges {
    @Input() collapsed;
    @Output() collapseChanged = new EventEmitter();
    subCollapsed = '';
    subMenu = '';

    constructor(public _appService: AppService, private dialog: MatDialog) {
    }

    logout() {
        const dialogRef: MatDialogRef<LogoutConfirmationComponent> = this.dialog.open(LogoutConfirmationComponent,
            {panelClass: 'logout-modal'}
        );
    }

    closeCollapse(close) {
        this.collapseChanged.emit(close);
        const header = document.getElementsByTagName('header')[0];
        header.classList.remove('lock-collapsed');
        this.subCollapsed = '';
        this.subMenu = '';
    }

    openSubCollapsed(subCollapsed) {
        if (this.subCollapsed === '') {
            this.subCollapsed = subCollapsed;
        } else {
            if (subCollapsed === this.subCollapsed) {
                this.subCollapsed = '';
            } else {
                this.subCollapsed = subCollapsed;
            }
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.collapsed) {
            if (changes.collapsed.currentValue == false) {
                this.closeCollapse(false);
            }
        }
    }
}
