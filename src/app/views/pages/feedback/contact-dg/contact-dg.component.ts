import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'dcaa-contact-dg',
  templateUrl: './contact-dg.component.html',
  styleUrls: ['./contact-dg.component.scss']
})
export class ContactDgComponent implements OnInit {

  contactDGForm: FormGroup;
  contactDGSubmitted = false;
  inProgress = false;

  constructor(private feedbackFormBuilder: FormBuilder) {

    this.contactDGForm = this.feedbackFormBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      reason: ['', Validators.required],
      feedback: ['', Validators.required]
    });
  }

  submitFeedback() {

  }

  get c() {
    return this.contactDGForm.controls;
  }



  ngOnInit() {
  }

}
