import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {Helper} from '../../../../shared/utils/helpers';
import {AccountServiceService} from '../../account-service.service';
import {ContactDetails} from '../../../../shared/models/API/Entities/UserProfileDetails';
import {LocaleInfo} from '../../../../shared/models/API/Entities/Admin/LocaleInfo';
import {Profile} from '../../../../shared/models/userProfile';

@Component({
  selector: 'dcaa-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  myProfile: Profile = new Profile();

  contactForm: FormGroup;
  formSubmitted = false;
  formErrors = {};
  locales: LocaleInfo[] = [];
  inProgress = false;

  constructor(private fb: FormBuilder,
              private restService: AccountServiceService) {
    this.myProfile = JSON.parse(localStorage.getItem('profile')) as Profile;
  }

  get c() {
    return this.contactForm.controls;
  }

  get d() {
    return this.c.contactDetails as FormArray;
  }

  onSubmit() {
    // tslint:disable-next-line:prefer-const
    let model: ContactDetails[] = this.contactForm.value.contactDetails as ContactDetails[];
    this.restService.addAccountDetails(model).then((noContent: any) => {
      this.formErrors = [];
      this.inProgress = false;
    }).catch((err: HttpErrorResponse) => {
      this.inProgress = false;
      this.formErrors = Helper.errorsArray(err);
    });
  }

  prepareForm() {
    this.contactForm = this.fb.group({
      contactDetails: this.fb.array([])
    });
  }

  fetchContactDetails() {
    this.restService.getAccountDetails().then((contactDetails: ContactDetails[]) => {
      this.prepareRecord(contactDetails);
    }).catch((err: HttpErrorResponse) => {
    });
  }

  prepareRecord(elements: ContactDetails[]) {
    elements.forEach(item => {
      this.onAddContacts(item);
    });
    this.d.patchValue(elements);
  }

  onAddContacts(elements) {
    if (elements !== null) {
      this.d.push(this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        localeId: ['', Validators.required],
        mobileNumber: ['', Validators.required],
        entryDate: [Validators.required],
        id: [Validators.required]
      }));
    } else {
      this.d.push(this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        mobileNumber: ['', Validators.required],
        localeId: ['', Validators.required],
        id: [0]
      }));
    }
  }

  fetchLocalesInfo() {
    this.restService.fetchLocales().then((res: LocaleInfo[]) => {
      this.locales = res;
    }).catch((err: HttpErrorResponse) => {

    });
  }

  ngOnInit() {
    this.prepareForm();
    this.fetchContactDetails();
    this.fetchLocalesInfo();
  }

}
