import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidation} from '../../../../shared/utils/customValidator';
import {HttpErrorResponse} from '@angular/common/http';
import {AccountServiceService} from '../../account-service.service';
import {TranslateService} from '@ngx-translate/core';
import {Helper} from '../../../../shared/utils/helpers';
import {UserService} from '../../../../shared/services/user.service';
import {UserProfile} from '../../../../shared/models/API/Entities/UserProfile';
import {Profile} from '../../../../shared/models/userProfile';
import {AutoCompleteEnum} from '../../../../shared/models/autocomplete';

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
  inProgress = false;
  myProfile: Profile = new Profile();
  @Output() validationErrors = new EventEmitter();
  AutoCompleteEnum = AutoCompleteEnum;

  @Input() individualType;
  @Input() accountType;
  @Input() pictureUrl;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private restService: AccountServiceService,
              protected translate: TranslateService) {
    this.myProfile = JSON.parse(localStorage.getItem('profile')) as Profile;
  }

  @Input() set _personalDetails(val: UserProfile) {
    console.log(val);
    this.userProfile = val;
    if (val) {
      if (val.accountType == 0) {
        val.accountType = this.accountType;
      }
      if (val.individualDetails == 0) {
        this.individualType = val.individualDetails.individualType;
      }

      this.prepareForm();
      this.personalForm.addControl('id', new FormControl(val.id, Validators.required));
      this.prepareRecord(val);
    }
  };

  get p() {
    return this.personalForm.controls;
  }

  prepareForm() {
    this.personalForm = this.fb.group({
      identity: [null],
      pictureUrl: [null],
      gender: [null],
      entryDate: [null],
      identityId: [Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      localeId: [null, Validators.required],
      individualType: [this.individualType],
      accountType: [this.accountType],
      dob: [null, Validators.compose([CustomValidation.validDate, CustomValidation.todayAndPast])]
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    console.log(this.personalForm.value);
    if (this.personalForm.valid) {
      // tslint:disable-next-line:prefer-const
      let model: UserProfile = this.personalForm.value as UserProfile;
      model.pictureUrl = this.pictureUrl;

      this.restService.editProfile(model).then((noContent: any) => {
        this.formErrors = [];
        this.inProgress = false;
        this.formSubmitted = false;
        this.userService.userProfileSource.next(model);
      }).catch((err: HttpErrorResponse) => {
        this.inProgress = false;
        this.formErrors = Helper.errorsArray(err);
      });
    } else {
      const formTabName = 'personal-details';
      const formInformation = {form: this.personalForm, name: formTabName};
      this.validationErrors.emit(formInformation);
    }
  }

  prepareRecord(element: UserProfile) {
    this.personalForm.patchValue(element);
  }

  ngOnInit() {
  }

}
