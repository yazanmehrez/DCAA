import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidation} from '../../../../shared/utils/customValidator';
import {HttpErrorResponse} from '@angular/common/http';
import {AccountServiceService} from '../../account-service.service';
import {TranslateService} from '@ngx-translate/core';
import {Helper} from '../../../../shared/utils/helpers';
import {UserService} from '../../../../shared/services/user.service';
import {LocaleInfo} from '../../../../shared/models/API/Entities/Admin/LocaleInfo';
import {UserProfile} from '../../../../shared/models/API/Entities/UserProfile';
import {Profile} from '../../../../shared/models/userProfile';
import {FormType} from '../../../../shared/models/contact.feedback';

@Component({
  selector: 'dcaa-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  personalForm: FormGroup;
  userProfile: UserProfile;
  formSubmitted = false;
  formErrors = {};
  locales: LocaleInfo[] = [];
  inProgress = false;
  myProfile: Profile = new Profile();
  @Input() individualType;
  @Input() pictureUrl;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private restService: AccountServiceService,
              protected translate: TranslateService) {
    this.myProfile = JSON.parse(localStorage.getItem('profile')) as Profile;
  }

  get p() {
    return this.personalForm.controls;
  }

  prepareForm() {
    this.personalForm = this.fb.group({
      id: [Validators.required],
      identity: [null],
      pictureUrl: [null],
      gender: [null],
      entryDate: [null],
      identityId: [Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      localeId: [null, Validators.required],
      individualType: [this.individualType, Validators.required],
      dob: [null, Validators.compose([CustomValidation.validDate, CustomValidation.todayAndPast])]
    });
  }

  onSubmit() {
    // tslint:disable-next-line:prefer-const
    let model: UserProfile = this.personalForm.value as UserProfile;
    model.pictureUrl = this.pictureUrl;
    console.log(model);
    this.restService.editProfile(model).then((noContent: any) => {
      this.formErrors = [];
      this.inProgress = false;
      this.userService.userProfileSource.next(model);
      this.fetchUserProfile();
    }).catch((err: HttpErrorResponse) => {
      this.inProgress = false;
      this.formErrors = Helper.errorsArray(err);
    });
  }

  fetchLocalesInfo() {
    this.restService.fetchLocales().then((res: LocaleInfo[]) => {
      this.locales = res;
    }).catch((err: HttpErrorResponse) => {

    });
  }

  fetchUserProfile() {
    this.restService.fetchUserProfile().then((me: UserProfile) => {
      this.prepareRecord(me);
    }).catch((err: HttpErrorResponse) => {
    });
  }

  prepareRecord(element: UserProfile) {
    this.prepareForm();
    this.personalForm.patchValue(element);
  }

  ngOnInit() {
    this.prepareForm();
    this.fetchLocalesInfo();
    this.fetchUserProfile();
  }

}
