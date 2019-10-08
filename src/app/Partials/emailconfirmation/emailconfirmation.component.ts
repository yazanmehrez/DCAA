import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { Profile } from 'src/app/shared/models/userProfile';


@Component({
  selector: 'app-emailconfirmation',
  templateUrl: './emailconfirmation.component.html',
  styleUrls: ['./emailconfirmation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmailconfirmationComponent implements OnInit {
  @Input() profile: Profile;
  @Output() resendEmail = new EventEmitter<boolean>();
  constructor(protected translate: TranslateService) {

  }

  ngOnInit() {
    // console.log(this.profile);
  }

  reverify() {
    this.resendEmail.emit(true);
  }
}
