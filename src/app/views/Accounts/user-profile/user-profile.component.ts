import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AccountServiceService} from '../account-service.service';
import {Profile} from 'src/app/shared/models/userProfile';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';
import {FileSystem} from 'src/app/shared/models/fileSystem';
import {FileUploaderComponent} from 'src/app/components/file-uploader/file-uploader.component';
import {TranslateService} from '@ngx-translate/core';
import {PersonalDetailsComponent} from '../Forms/personal-details/personal-details.component';
import {ContactDetailsComponent} from '../Forms/contact-details/contact-details.component';
import {CompanyDetailsComponent} from '../Forms/company-details/company-details.component';
import {UserService} from '../../../shared/services/user.service';
import {AccountType, CompanyLocation, IndividualType} from '../../../shared/models/API/Enums/AccountEnums';
import {DocumentsDetailsComponent} from '../Forms/documents-details/documents-details.component';
import {UserProfile} from '../../../shared/models/API/Entities/UserProfile';
import {HttpErrorResponse} from '@angular/common/http';
import {LocaleInfo} from '../../../shared/models/API/Entities/Admin/LocaleInfo';

@Component({
  selector: 'dcaa-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {
  myProfile: Profile = new Profile();
  @ViewChild('imageFileUploadCrl', {static: true}) imageFileUploadCrl: FileUploaderComponent;
  profileErrors = {};
  locales: LocaleInfo[] = [];
  validationResult = true;
  pictureUrl: string;
  inProgress = false;
  openForms = false;

  AccountType = AccountType;
  accountType: AccountType;

  IndividualType = IndividualType;
  individualType: IndividualType;

  CompanyLocation = CompanyLocation;
  companyLocation: CompanyLocation = CompanyLocation.InsideUAE;

  tradLicense;

  TradeLicense = [
    {
      icon: 'company',
      name: 'Dubai Airport'
    }, {
      icon: 'company',
      name: 'Dubai Airport'
    }, {
      icon: 'company',
      name: 'Dubai Airport'
    }, {
      icon: 'company',
      name: 'Dubai Airport'
    }, {
      icon: 'company',
      name: 'Dubai Airport'
    }, {
      icon: 'company',
      name: 'Dubai Airport'
    }, {
      icon: 'company',
      name: 'Dubai Airport'
    }, {
      icon: 'company',
      name: 'Dubai Airport'
    },
  ];

  userProfileDetails: UserProfile;

  @ViewChild('swalComp', {static: true}) private swalComp: SwalComponent;

  @ViewChild('personalDetailsComponent', {static: false}) private personalDetailsComponent: PersonalDetailsComponent;
  @ViewChild('documentsDetailsComponent', {static: false}) private documentsDetailsComponent: DocumentsDetailsComponent;
  @ViewChild('contactDetailsComponent', {static: false}) private contactDetailsComponent: ContactDetailsComponent;
  @ViewChild('companyDetailsComponent', {static: false}) private companyDetailsComponent: CompanyDetailsComponent;

  constructor(private profileBuilder: FormBuilder,
              private restService: AccountServiceService,
              private userService: UserService,
              protected translate: TranslateService) {
    this.myProfile = JSON.parse(localStorage.getItem('profile')) as Profile;
  }


  updateProfile() {
    this.validationResult = true;
    if (this.accountType === AccountType.Individual) {
      this.personalDetailsComponent.onSubmit();
      this.contactDetailsComponent.onSubmit();
      this.documentsDetailsComponent.onSubmit();

      if (this.validationResult) {
        this.swalComp.fire();
      }

    }
    if (this.accountType === AccountType.PrivateCompany) {
      this.personalDetailsComponent.onSubmit();
      this.contactDetailsComponent.onSubmit();
      this.companyDetailsComponent.onSubmit();

      if (this.validationResult) {
        this.swalComp.fire();
      }
    }

  }

  validationErrors(formInformation: any) {
    this.goToInvalidForm(formInformation.name);
    this.validationResult = formInformation.form.valid;
  }

  goToInvalidForm(formName: string) {
    (<any>$('.nav-item a[href="#' + formName + '"]')).tab('show');
  };

  updateLocalProfile(userProfile) {
    this.myProfile.firstName = userProfile.firstName;
    this.myProfile.lastName = userProfile.lastName;
    this.myProfile.pictureUrl = userProfile.pictureUrl;

    localStorage.setItem('profile', JSON.stringify(this.myProfile));
  }


  setImage(fileSystem: FileSystem[]) {
    this.pictureUrl = JSON.stringify(fileSystem);
  }

  fetchUserProfile() {
    this.inProgress = true;
    this.restService.fetchUserProfile().then((me: UserProfile) => {
      this.userProfileDetails = me;
      this.accountType = this.userProfileDetails.accountType;

      this.inProgress = false;
      this.individualType = this.userProfileDetails.individualDetails.individualType;

      if (this.accountType) {
        this.openForms = true;
      }

    }).catch((err: HttpErrorResponse) => {
    });
  }

  fetchLocalesInfo() {
    this.restService.fetchLocales().then((res: LocaleInfo[]) => {
      this.locales = res;
    }).catch((err: HttpErrorResponse) => {

    });
  }

  ngOnInit() {
    this.fetchUserProfile();
    this.fetchLocalesInfo();

    if (this.imageFileUploadCrl) {
      this.imageFileUploadCrl.clearStorage();
    }
    this.userService.userProfile$.subscribe((userProfile) => {
      this.updateLocalProfile(userProfile);
    });
  }

}
