import {Component, OnInit, ViewChild} from '@angular/core';
import {Profile} from 'src/app/shared/models/userProfile';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';
import {ChangeEmailModel, DigitModel, DigitToken, EmailModel} from '../accountsmodel';
import {HttpErrorResponse} from '@angular/common/http';
import {Helper} from 'src/app/shared/utils/helpers';
import {UserService} from 'src/app/shared/services/user.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.scss']
})
export class ChangeEmailComponent implements OnInit {
  myProfile: Profile;
  changeemailSubmitted = false;
  changeemailForm: FormGroup;
  inProgress = false;
  fetchinginProgress = false;
  changeemailErrors = {};
  sentSuccessfully = false;
  tokenSubmitted = false;
  tokenForm: FormGroup;
  tokenErrors = {};
  @ViewChild('swalComp', {static: true}) private swalComp: SwalComponent;

  constructor(private profileBuilder: FormBuilder, private restService: UserService, protected translate: TranslateService) {

  }

  get l() {
    return this.changeemailForm.controls;
  }

  get t() {
    return this.tokenForm.controls;
  }

  prepareForm() {
    this.changeemailForm = this.profileBuilder.group({
      email: [null, [Validators.required, Validators.email]],
    });

    this.tokenForm = this.profileBuilder.group({
      digit: [null, [Validators.required]],
    });
  }

  tokenRequest(formDirective: FormGroupDirective) {
    this.tokenSubmitted = true;
    this.inProgress = true;
    console.log(this.tokenForm.value);
    // stop here if form is invalid
    if (this.tokenForm.invalid) {
      this.inProgress = false;
      // this.localeErrors = Helper.errorsArray(err.error);
      return;
    }

    this.sendTokenServer(formDirective);
  }

  sendTokenServer(formDirective: FormGroupDirective) {
    const model: DigitModel = this.tokenForm.value as DigitModel;
    this.restService.getToken(model).then((digitToken: DigitToken) => {
      const changemodel: ChangeEmailModel = new ChangeEmailModel();
      changemodel.newEmail = digitToken.sentToEmail;
      changemodel.token = digitToken.token;
      changemodel.userName = digitToken.userName;

      this.restService.setEmail(changemodel).then(() => {
        this.tokenErrors = [];
        this.inProgress = false;
        this.sentSuccessfully = true;
        this.successMessage(true);
      }).catch((err: HttpErrorResponse) => {
        this.inProgress = false;
        this.tokenErrors = Helper.errorsArray(err);
      });

    }).catch((err: HttpErrorResponse) => {
      this.inProgress = false;
      this.changeemailErrors = Helper.errorsArray(err);
    });
  }

  resetEmail(formDirective: FormGroupDirective) {
    this.changeemailSubmitted = true;
    this.inProgress = true;

    // stop here if form is invalid
    if (this.changeemailForm.invalid) {
      this.inProgress = false;
      // this.localeErrors = Helper.errorsArray(err.error);
      return;
    }

    this.updateServer(formDirective);
  }

  updateServer(formDirective: FormGroupDirective) {
    // tslint:disable-next-line:prefer-const
    let model: EmailModel = this.changeemailForm.value as EmailModel;
    this.restService.changeEmail(model).then(() => {
      this.changeemailErrors = [];
      this.inProgress = false;
      this.sentSuccessfully = true;
      this.successMessage(true);
    }).catch((err: HttpErrorResponse) => {
      this.inProgress = false;
      this.changeemailErrors = Helper.errorsArray(err);
    });
  }

  successMessage(refresh: boolean = false) {

    this.swalComp.title = 'Processed successfully';
    this.swalComp.type = 'success';
    this.swalComp.showCancelButton = false;
    this.swalComp.fire();
  }

  ngOnInit() {
    this.prepareForm();
    this.myProfile = JSON.parse(localStorage.getItem('profile')) as Profile;
  }

}
