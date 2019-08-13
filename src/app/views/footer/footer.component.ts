import {Component, OnInit} from '@angular/core';
import {User} from '../../../classes/user';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    member: User;

    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.authenticationService.currentUser.subscribe(member => {
            this.member = member;
        });
    }

}
