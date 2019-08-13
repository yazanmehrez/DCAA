import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {WelcomeComponent} from '../../modals/welcome/welcome.component';
import {ApiService} from '../../../services/api.service';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    cards = [
        {
            image: 'assets/images/c1.png',
            title: '_ShortLoremTitle',
            description: '_CardDescription'
        },
        {
            image: 'assets/images/c2.png',
            title: '_ShortLoremTitle',
            description: '_CardDescription'
        },
        {
            image: 'assets/images/c3.png',
            title: '_ShortLoremTitle',
            description: '_CardDescription'
        },
        {
            image: 'assets/images/c4.png',
            title: '_ShortLoremTitle',
            description: 'Suspendisse vel leo efficitur, venenatis est ut tincidunt nibh.'
        }
    ];
    imageCross = [
        {
            image: 'assets/images/ic1.png',
            title: '_MiniLorem',
            description: '_LongLorem'
        },
        {
            image: 'assets/images/ic2.png',
            title: '_MiniLorem',
            description: '_LongLorem'
        }
    ];
    application = [
        {
            image: 'assets/images/app1.png',
            title: '_MiniLorem',
            description: '_LongLorem'
        },
        {
            image: 'assets/images/app2.png',
            title: '_MiniLorem',
            description: '_LongLorem'
        }
    ];

    constructor(private dialog: MatDialog, private api: ApiService, private auth: AuthenticationService) {
    }

    getAllUsers() {
        this.api.getGenericPage('get_users', {page: 10, size: 10}).subscribe(response => {
            // console.log(response);
        });
    }

    ngOnInit() {
        this.getAllUsers();

        if (!localStorage.getItem('firstVisit')) {
            localStorage.setItem('firstVisit', '1');
        }
        if (localStorage.getItem('firstVisit') == '1') {
            setTimeout(() => {
                const dialogRef: MatDialogRef<WelcomeComponent> = this.dialog.open(WelcomeComponent,
                    {panelClass: 'welcome-modal'}
                );
                localStorage.setItem('firstVisit', '0');
            }, 1000);
        }
    }

}
