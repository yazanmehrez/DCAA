import {Component, Input, NgZone, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserProfile} from '../../../../shared/models/API/Entities/UserProfile';
import {Profile} from '../../../../shared/models/userProfile';
import {UserService} from '../../../../shared/services/user.service';
import {AccountServiceService} from '../../account-service.service';
import {TranslateService} from '@ngx-translate/core';
import {IndividualDetails} from '../../../../shared/models/API/Entities/UserProfileDetails';
import {IndividualType} from '../../../../shared/models/API/Enums/AccountEnums';
import {Helper} from '../../../../shared/utils/helpers';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'dcaa-documents-details',
  templateUrl: './documents-details.component.html',
  styleUrls: ['./documents-details.component.scss']
})
export class DocumentsDetailsComponent implements OnInit, OnChanges {
  documentsForm: FormGroup;
  userProfile: UserProfile;
  formSubmitted = false;
  formErrors = {};
  inProgress = false;
  myProfile: Profile = new Profile();

  IndividualType = IndividualType;
  @Input() individualType;

  individualDetails: IndividualDetails;
  @Input() set _individualDetails(val: IndividualDetails) {
    this.individualDetails = val;
    if (val) {
      this.prepareForm(val);
      this.documentsForm.addControl('id', new FormControl(val.id, Validators.required));
      this.prepareRecord(val);
    }
  };

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private restService: AccountServiceService,
              protected translate: TranslateService, private ngZone: NgZone) {
    this.myProfile = JSON.parse(localStorage.getItem('profile')) as Profile;

  }

  get p() {
    return this.documentsForm.controls;
  }

  prepareForm(item: IndividualDetails = null) {
    this.documentsForm = this.fb.group({
      emiratesIDCopy: [item ? item.emiratesIDCopy : null],
      emiratesID: [item ? item.emiratesID : null],
      passportVisaCopy: [item ? item.passportVisaCopy : null],
      passportVisa: [item ? item.passportVisa : null],
      userProfileId: [this.myProfile.profileId, Validators.required],
      individualType: [this.individualType, Validators.required]
    });
    if (this.individualType === IndividualType.Resident) {
      this.documentsForm.controls['emiratesID'].setValidators([Validators.required]);
      this.documentsForm.controls['emiratesIDCopy'].setValidators([Validators.required]);
      if (this.documentsForm.get('passportVisa')) {
        this.documentsForm.removeControl('passportVisaCopy');
        this.documentsForm.removeControl('passportVisa');
      }
    } else {
      this.documentsForm.controls['passportVisa'].setValidators([Validators.required]);
      this.documentsForm.controls['passportVisaCopy'].setValidators([Validators.required]);
      if (this.documentsForm.get('emiratesID')) {
        this.documentsForm.removeControl('emiratesIDCopy');
        this.documentsForm.removeControl('emiratesID');
      }
    }
  }


  onSubmit() {
    // tslint:disable-next-line:prefer-const
    let model: IndividualDetails = this.documentsForm.value as IndividualDetails;
    if (this.documentsForm.value.id === 0) {
      this.restService.addIndividual(model).then((noContent: any) => {
        this.formErrors = [];
        this.inProgress = false;
      }).catch((err: HttpErrorResponse) => {
        this.inProgress = false;
        this.formErrors = Helper.errorsArray(err);
      });
    } else {
      this.restService.editIndividual(model).then((noContent: any) => {
        this.formErrors = [];
        this.inProgress = false;
      }).catch((err: HttpErrorResponse) => {
        this.inProgress = false;
        this.formErrors = Helper.errorsArray(err);
      });
    }

  }

  prepareRecord(element: IndividualDetails) {
    this.documentsForm.patchValue(element);
  }

  ngOnInit() {

  }

  ngOnChanges(): void {
    this.prepareForm(this.individualDetails);
  }

}
