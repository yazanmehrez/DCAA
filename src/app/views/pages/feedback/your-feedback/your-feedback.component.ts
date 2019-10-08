import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {Helper} from '../../../../shared/utils/helpers';
import {ContactFeedback, FormType} from '../../../../shared/models/contact.feedback';
import {ContactService} from '../../../../shared/services/contact.service';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'dcaa-your-feedback',
  templateUrl: './your-feedback.component.html',
  styleUrls: ['./your-feedback.component.scss']
})
export class YourFeedbackComponent implements OnInit {
  feedbackForm: FormGroup;
  feedbackSubmitted = false;
  inProgress = false;
  feedbackErrors: string[] = [];
  @ViewChild('feedbackSwal', {static: true}) private feedbackSwal: SwalComponent;


  constructor(private contactService: ContactService, private feedbackFormBuilder: FormBuilder) {

    this.feedbackForm = this.feedbackFormBuilder.group({
      name: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      formType: [FormType.GeneralAndFeedBack, Validators.required],
      reason: ['', Validators.required],
      message: ['', Validators.required],
      captchaResponse: ['', Validators.required]
    });
  }

  get f() {
    return this.feedbackForm.controls;
  }

  submitFeedback() {
    const contactFeedbackModel: ContactFeedback = this.feedbackForm.value as ContactFeedback;

    this.feedbackSubmitted = true;
    this.inProgress = true;
    // stop here if form is invalid
    if (this.feedbackForm.invalid) {
      this.inProgress = false;
      return;
    }
    this.contactService.submitContactFeedback(contactFeedbackModel).then(() => {
      this.inProgress = false;
      this.feedbackSwal.fire();
    }).catch((err: HttpErrorResponse) => {
      this.inProgress = false;
      this.feedbackErrors = Helper.errorsArray(err);
    });
  }

  getContactFeedback() {
    const typeID = 1;
    this.contactService.getContactFeedback(typeID).then(() => {
    }).catch((err: HttpErrorResponse) => {
      this.feedbackErrors = Helper.errorsArray(err);
    });
  }

  ngOnInit() {
    this.getContactFeedback();
  }

}
