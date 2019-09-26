import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective} from '@angular/forms';
import { AccountServiceService } from '../account-service.service';

import { HttpErrorResponse } from '@angular/common/http';
import { CustomValidation } from 'src/app/shared/utils/customValidator';
import { UserProfile, Profile, LocaleInfo } from 'src/app/shared/models/userProfile';
import { Helper } from 'src/app/shared/utils/helpers';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { FileSystem } from 'src/app/shared/models/fileSystem';
import { FileUploaderComponent } from 'src/app/components/file-uploader/file-uploader.component';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  myProfile: Profile = new Profile();
  get l() { return this.profileForm.controls; }
  @ViewChild('imageFileUploadCrl', { static: true }) imageFileUploadCrl: FileUploaderComponent;
  constructor(private profileBuilder: FormBuilder, private restService: AccountServiceService, protected translate: TranslateService) {
    this.myProfile = JSON.parse(localStorage.getItem('profile')) as Profile;
  }

  profileSubmitted = false;
  profileForm: FormGroup;
  inProgress = false;
  fetchinginProgress = false;
  profileErrors = {};

  locales: LocaleInfo[] = [];

  @ViewChild('swalComp', { static: true }) private swalComp: SwalComponent;

  prepareForm() {
    this.profileForm = this.profileBuilder.group({
      id: [0, Validators.required],
      identityId: [null, Validators.required],
      identity: [null],
      firstName: ['', Validators.required],
      pictureUrl: [null],
      lastName: ['', Validators.required],
      localeId: [null, Validators.required],
      locale: [null],
      supplierInfo: [null],
      gender: [null],
      entryDate: [null],
      dob: [null, Validators.compose([CustomValidation.validDate, CustomValidation.todayAndPast])]
    });
  }



  updateProfile(formDirective: FormGroupDirective) {

    this.profileSubmitted = true;
    this.inProgress = true;

    // stop here if form is invalid
    if (this.profileForm.invalid) {
      this.inProgress = false;
      // this.localeErrors = Helper.errorsArray(err.error);
      return;
    }

    this.updateServer(formDirective);

  }

  updateLocalProfile(userProfile: UserProfile) {
    this.myProfile.firstName = userProfile.firstName;
    this.myProfile.lastName = userProfile.lastName;

    localStorage.setItem('profile', JSON.stringify(this.myProfile));
  }

  updateServer(formDirective: FormGroupDirective) {
    // tslint:disable-next-line:prefer-const
    let model: UserProfile = this.profileForm.value as UserProfile;

    this.restService.editProfile(model).then((noContent: any) => {
      this.profileErrors = [];
      this.inProgress = false;
      this.updateLocalProfile(model);

      this.successMessage(true);
      this.fetchUserProfile();
    }). catch((err: HttpErrorResponse) => {
      this.inProgress = false;
      this.profileErrors = Helper.errorsArray(err);
    });
  }


  successMessage(refresh: boolean = false) {
    this.swalComp.title = 'Processed successfully';
    this.swalComp.type = 'success';
    this.swalComp.showCancelButton = false;
    this.swalComp.fire();
  }

  fetchLocalesInfo() {
    this.restService.fetchLocales().then((res: LocaleInfo[]) => {
      this.locales = res;
    }). catch((err: HttpErrorResponse) => {

    });
  }

  fetchUserProfile() {
    this.fetchinginProgress = true;
    this.restService.fetchUserProfile().then((me: UserProfile) => {
      this.prepareRecord(me);
      this.fetchinginProgress = false;
    }). catch((err: HttpErrorResponse) => {
      this.fetchinginProgress = false;
    });
  }

  setImage(fileSystem: FileSystem[]) {

    if (fileSystem) {
      // imageInput.value = JSON.stringify(fileSystem);
      this.profileForm.patchValue({
        pictureUrl: JSON.stringify(fileSystem)
      });
    }

  }

  prepareRecord(element: UserProfile) {

    this.prepareForm();

    this.profileForm.patchValue(element);
  }


  ngOnInit() {
    this.prepareForm();
    this.fetchLocalesInfo();
    this.fetchUserProfile();
    if (this.imageFileUploadCrl) {
      this.imageFileUploadCrl.clearStorage();
    }
  }

}
