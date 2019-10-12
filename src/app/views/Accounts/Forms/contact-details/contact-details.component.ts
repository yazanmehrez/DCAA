import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {Helper} from '../../../../shared/utils/helpers';
import {AccountServiceService} from '../../account-service.service';
import {ContactDetails} from '../../../../shared/models/API/Entities/UserProfileDetails';
import {LocaleInfo} from '../../../../shared/models/API/Entities/Admin/LocaleInfo';
import {Profile} from '../../../../shared/models/userProfile';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ConfirmationModalComponent} from '../../../../modals/confirmation-modal/confirmation-modal.component';
import {CustomValidation} from '../../../../shared/utils/customValidator';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'dcaa-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  myProfile: Profile = new Profile();

  contactForm: FormGroup;
  formSubmitted = false;
  inProgress = false;
  contactDetails: ContactDetails[];
  formErrors = {};

  @Output() validationErrors = new EventEmitter();
  @Input() locales: LocaleInfo[] = [];

  @ViewChild('swalComp', {static: true}) private swalComp: SwalComponent;

  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              private restService: AccountServiceService) {
    this.myProfile = JSON.parse(localStorage.getItem('profile')) as Profile;
  }

  @Input() set _contactDetails(val: ContactDetails[]) {
    this.contactDetails = val;
    if (val) {
      this.prepareForm();
      this.prepareRecord(val);
    }
  };

  get c() {
    return this.contactForm.controls;
  }

  get d() {
    return this.c.contactDetails as FormArray;
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm) {
      if (this.contactForm.valid) {
        // tslint:disable-next-line:prefer-const
        let model: ContactDetails[] = this.contactForm.value.contactDetails as ContactDetails[];
        this.restService.addContactDetails(model).then((noContent: any) => {
          this.formErrors = [];
          this.inProgress = false;
          this.formSubmitted = false;
        }).catch((err: HttpErrorResponse) => {
          this.inProgress = false;
          this.formErrors = Helper.errorsArray(err);
        });
      } else {
        const formTabName = 'contact-details';
        const formInformation = {form: this.contactForm, name: formTabName};
        this.validationErrors.emit(formInformation);
      }
    }

  }

  onDelete(contact: ContactDetails) {
    this.restService.deleteContactDetails(contact).then((noContent: any) => {
      this.formErrors = [];
      this.inProgress = false;
      this.successMessage(true);
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

  prepareRecord(elements: ContactDetails[]) {
    elements.forEach(item => {
      this.onAddContacts(item);
    });
    this.d.patchValue(elements);
  }

  confirmDeleting(contact: ContactDetails) {
    const dialogRef: MatDialogRef<ConfirmationModalComponent> = this.dialog.open(ConfirmationModalComponent,
      {panelClass: 'dcaa-confirmation'});
    // tslint:disable-next-line:prefer-const
    dialogRef.componentInstance.id = contact.id;
    dialogRef.componentInstance.name = contact.firstName;
    dialogRef.afterClosed().subscribe(result => {
      if (dialogRef.componentInstance.result) {
        this.onDelete(contact);
        document.getElementById('contact-' + contact.id).remove();
      }
    });
  }

  successMessage(refresh: boolean = false) {
    this.swalComp.title = 'Processed successfully';
    this.swalComp.type = 'success';
    this.swalComp.showCancelButton = false;
    this.swalComp.fire();
  }

  onAddContacts(item = null) {
    // tslint:disable-next-line:prefer-const
    let config = this.fb.group({
      userProfileID: [this.myProfile.profileId, Validators.required],
      firstName: ['', [Validators.required, CustomValidation.cannotContainSpace]],
      lastName: ['', [Validators.required, CustomValidation.cannotContainSpace]],
      localeId: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      entryDate: [Validators.required],
      address: [''],
      poBox: [],
      fax: []
    });
    if (item) {
      config.addControl('id', new FormControl(item.id, Validators.required));
    } else {
      this.prepareForm();
    }
    this.d.push(config);
  }

  ngOnInit() {
  }

}
