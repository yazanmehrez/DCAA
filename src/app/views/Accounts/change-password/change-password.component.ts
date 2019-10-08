import {Component, OnInit, ViewChild} from '@angular/core';
import {Profile} from 'src/app/shared/models/userProfile';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';
import {CustomValidation} from 'src/app/shared/utils/customValidator';
import {ChangePasswordViewModel} from '../accountsmodel';
import {HttpErrorResponse} from '@angular/common/http';
import {Helper} from 'src/app/shared/utils/helpers';
import {UserService} from 'src/app/shared/services/user.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  myProfile: Profile;
  changepasswordSubmitted = false;
  changepasswordForm: FormGroup;
  inProgress = false;
  fetchinginProgress = false;
  changepasswordErrors = [];
  @ViewChild('swalComp', {static: true}) private swalComp: SwalComponent;

  constructor(private profileBuilder: FormBuilder, private restService: UserService, protected translate: TranslateService) {

  }

  get l() {
    return this.changepasswordForm.controls;
  }

  prepareForm() {
    this.changepasswordForm = this.profileBuilder.group({
      oldPassword: ['', Validators.compose([Validators.required, Validators.minLength(6), CustomValidation.cannotContainSpace])],
      newPassword: ['', Validators.compose([Validators.required, Validators.minLength(6), CustomValidation.cannotContainSpace])],
      confirmPassword: ['', Validators.required],
    });
  }

  updatePassword(formDirective: FormGroupDirective) {
    this.changepasswordSubmitted = true;
    this.inProgress = true;

    // stop here if form is invalid
    if (this.changepasswordForm.invalid) {
      this.inProgress = false;
      // this.localeErrors = Helper.errorsArray(err.error);
      return;
    }

    this.updateServer(formDirective);
  }

  updateServer(formDirective: FormGroupDirective) {
    // tslint:disable-next-line:prefer-const
    let model: ChangePasswordViewModel = this.changepasswordForm.value as ChangePasswordViewModel;

    this.restService.changePassword(model).then(() => {
      this.changepasswordErrors = [];
      this.inProgress = false;
      this.swalComp.fire();
    }).catch((err: HttpErrorResponse) => {
      this.inProgress = false;
      this.changepasswordErrors = Helper.errorsArray(err);
    });
  }


  ngOnInit() {
    this.prepareForm();
    this.myProfile = JSON.parse(localStorage.getItem('profile')) as Profile;

    this.swalComp.confirm.subscribe(() => {
      this.restService.logout();
    });
  }

}
