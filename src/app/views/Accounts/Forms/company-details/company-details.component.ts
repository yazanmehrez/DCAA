import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountServiceService} from '../../account-service.service';
import {TranslateService} from '@ngx-translate/core';
import {CompanyDetails} from '../../../../shared/models/API/Entities/CompanyDetails';
import {LocaleInfo} from '../../../../shared/models/API/Entities/Admin/LocaleInfo';
import {HttpErrorResponse} from '@angular/common/http';
import {Helper} from '../../../../shared/utils/helpers';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';
import {CustomValidation} from '../../../../shared/utils/customValidator';

@Component({
  selector: 'dcaa-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  companyForm: FormGroup;
  formSubmitted = false;
  @Input() locales: LocaleInfo[] = [];
  @Output() validationErrors = new EventEmitter();
  formErrors = {};
  inProgress = false;
  companyDetails: CompanyDetails;
  @ViewChild('swalComp', {static: true}) private swalComp: SwalComponent;

  constructor(private fb: FormBuilder,
              private restService: AccountServiceService,
              protected translate: TranslateService) {
  }

  @Input() set _companyDetails(val: CompanyDetails) {
    this.companyDetails = val;
    this.prepareForm(val);
    if (val) {
      this.companyForm.addControl('id', new FormControl(val.id, Validators.required));
      this.companyForm.addControl('userProfileId', new FormControl(val.userProfileId, Validators.required));
      this.prepareRecord(val);
    }
  };

  get p() {
    return this.companyForm.controls;
  }

  prepareForm(item: CompanyDetails = null) {
    this.companyForm = this.fb.group({
      companyName: ['', Validators.required],
      localeId: ['', Validators.required],
      tradeLicenseNo: ['', Validators.required],
      tradeLicenseCopy: ['', Validators.required],
      tradeIssueDate: ['', Validators.required],
      tradeExpiryDate: ['', Validators.required],
      address: ['', Validators.required],
      companyEmail: ['', [Validators.required, CustomValidation.isPublicEmail]],
      companyPOBox: ['', Validators.required],
      contactNo: ['', Validators.required],
      officeNo: ['', Validators.required],
    });

  }

  prepareRecord(element: CompanyDetails) {
    console.log(element);
    this.companyForm.patchValue(element);
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.companyForm.valid) {
      // tslint:disable-next-line:prefer-const
      let model: CompanyDetails = this.companyForm.value as CompanyDetails;
      if (model.id) {
        this.restService.editCompanyDetails(model).then((noContent: any) => {
          this.formErrors = [];
          this.inProgress = false;
          this.formSubmitted = false;
        }).catch((err: HttpErrorResponse) => {
          this.inProgress = false;
          this.formErrors = Helper.errorsArray(err);
        });
      } else {
        this.restService.addCompanyDetails(model).then((noContent: any) => {
          this.formErrors = [];
          this.inProgress = false;
          this.formSubmitted = false;
        }).catch((err: HttpErrorResponse) => {
          this.inProgress = false;
          this.formErrors = Helper.errorsArray(err);
        });
      }
    } else {
      const formTabName = 'company-details';
      const formInformation = {form: this.companyForm, name: formTabName};
      this.validationErrors.emit(formInformation);
    }

  }

  successMessage(refresh: boolean = false) {
    this.swalComp.title = 'Processed successfully';
    this.swalComp.type = 'success';
    this.swalComp.showCancelButton = false;
    this.swalComp.fire();
  }

  ngOnInit() {
  }


}
