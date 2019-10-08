import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidation} from '../../../../shared/utils/customValidator';
import {AccountServiceService} from '../../account-service.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'dcaa-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  companyForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder,
              private restService: AccountServiceService,
              protected translate: TranslateService) {
  }

  get p() {
    return this.companyForm.controls;
  }

  prepareForm() {
    this.companyForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      identityId: [null, Validators.required],
      dob: [null, Validators.compose([CustomValidation.validDate, CustomValidation.todayAndPast])],
      contacts: new FormArray([])
    });
  }

  onSubmit() {
    this.formSubmitted = true;

    // stop here if form is invalid
    if (this.companyForm.invalid) {
      return;
    }
  }

  ngOnInit() {
    this.prepareForm();
  }


}
