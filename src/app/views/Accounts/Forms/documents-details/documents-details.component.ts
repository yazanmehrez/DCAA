import {Component, EventEmitter, Input, NgZone, OnChanges, OnInit, Output} from '@angular/core';
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
  @Output() validationErrors = new EventEmitter();

  individualDetails: IndividualDetails;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private restService: AccountServiceService,
              protected translate: TranslateService, private ngZone: NgZone) {
    this.myProfile = JSON.parse(localStorage.getItem('profile')) as Profile;

  }

  @Input() set _individualDetails(val: IndividualDetails) {
    this.individualDetails = val;
    if (val) {
      this.prepareForm(val);
      this.prepareRecord(val);
    }
  };

  get p() {
    return this.documentsForm.controls;
  }

  prepareForm(item: IndividualDetails = null) {
    this.documentsForm = this.fb.group({
      emiratesIDCopy: [item ? item.emiratesIDCopy : null],
      emiratesID: [item ? item.emiratesID : null],
      passportVisaCopy: [item ? item.passportVisaCopy : null],
      passportVisa: [item ? item.passportVisa : null],
      userProfileID: [this.myProfile.profileId, Validators.required],
      individualType: [this.individualType, Validators.required]
    });
    if (item) {
      this.documentsForm.addControl('id', new FormControl(item.id, Validators.required));
    }
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
    this.formSubmitted = true;
    if (this.documentsForm.valid) {
      // tslint:disable-next-line:prefer-const
      let model: IndividualDetails = this.documentsForm.value as IndividualDetails;
      if (this.documentsForm.value.id === 0) {
        this.restService.addIndividual(model).then((noContent: any) => {
          this.formErrors = [];
          this.inProgress = false;
          this.formSubmitted = false;
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
    } else {
      const formTabName = 'personal-details';
      const formInformation = {form: this.documentsForm, name: formTabName};
      this.validationErrors.emit(formInformation);
    }
  }


  prepareRecord(element
                  :
                  IndividualDetails
  ) {
    this.documentsForm.patchValue(element);
  }

  ngOnInit() {
  }

  ngOnChanges()
    :
    void {
    this.prepareForm(this.individualDetails);
  }

}
