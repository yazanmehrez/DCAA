import { Component, OnInit, ViewChild } from '@angular/core';
import { Profile } from 'src/app/shared/models/userProfile';
import { FormGroup, FormGroupDirective, FormBuilder, Validators } from '@angular/forms';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { CustomValidation } from 'src/app/shared/utils/customValidator';
import { ChangePasswordViewModel } from '../accountsmodel';
import { HttpErrorResponse } from '@angular/common/http';
import { Helper } from 'src/app/shared/utils/helpers';
import { UserService } from 'src/app/shared/services/user.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  myProfile: Profile;
  get l() { return this.changepasswordForm.controls; }
  changepasswordSubmitted = false;
  changepasswordForm: FormGroup;
  inProgress = false;
  fetchinginProgress = false;
  changepasswordErrors = [];

  @ViewChild('swalComp', { static: true }) private swalComp: SwalComponent;

  prepareForm() {
    this.changepasswordForm = this.profileBuilder.group({
      oldPassword: ['', Validators.compose([Validators.required, Validators.minLength(6), CustomValidation.cannotContainSpace])],
      newPassword: ['', Validators.compose([Validators.required, Validators.minLength(6), CustomValidation.cannotContainSpace])],
      confirmPassword: ['', Validators.required],
    });
  }
  constructor(private profileBuilder: FormBuilder, private restService: UserService, protected translate: TranslateService) {

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
      this.successMessage(true);
    }). catch((err: HttpErrorResponse) => {
      this.inProgress = false;
      this.changepasswordErrors = Helper.errorsArray(err);
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

    this.swalComp.confirm.subscribe(() => {
      this.restService.logout();
    });
  }

}
