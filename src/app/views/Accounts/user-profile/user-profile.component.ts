import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
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

@Component({
  selector: 'dcaa-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {
  myProfile: Profile = new Profile();
  @ViewChild('imageFileUploadCrl', {static: true}) imageFileUploadCrl: FileUploaderComponent;
  profileForm: FormGroup;
  profileErrors = {};

  pictureUrl: string;
  inProgress = false;
  openForms = false;

  AccountType = AccountType;
  accountType: AccountType;

  IndividualType = IndividualType;
  individualType: IndividualType;

  CompanyLocation = CompanyLocation;
  companyLocation: CompanyLocation = CompanyLocation.InsideUAE;

  tradLicense = 0;

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
  @ViewChild('swalComp', {static: true}) private swalComp: SwalComponent;

  @ViewChild('personalDetails', {static: false}) private personalDetails: PersonalDetailsComponent;
  @ViewChild('documentsDetails', {static: false}) private documentsDetails: DocumentsDetailsComponent;
  @ViewChild('contactDetails', {static: false}) private contactDetails: ContactDetailsComponent;
  @ViewChild('companyDetails', {static: false}) private companyDetails: CompanyDetailsComponent;

  constructor(private profileBuilder: FormBuilder,
              private restService: AccountServiceService,
              private userService: UserService,
              protected translate: TranslateService) {
    this.myProfile = JSON.parse(localStorage.getItem('profile')) as Profile;
  }


  updateProfile() {
    if (this.accountType === AccountType.Individual) {
      this.personalDetails.onSubmit();
      this.documentsDetails.onSubmit();
      this.contactDetails.onSubmit();
      this.updateServer(
        this.personalDetails.personalForm.value,
        this.contactDetails.contactForm.value,
        null);
    }
    if (this.accountType === AccountType.PrivateCompany) {
      this.personalDetails.onSubmit();
      this.companyDetails.onSubmit();
      this.updateServer(
        this.personalDetails.personalForm.value,
        null, this.companyDetails.companyForm.value);
    }

    // this.inProgress = true;
  }

  updateLocalProfile(userProfile) {
    this.myProfile.firstName = userProfile.firstName;
    this.myProfile.lastName = userProfile.lastName;
    this.myProfile.pictureUrl = userProfile.pictureUrl;

    localStorage.setItem('profile', JSON.stringify(this.myProfile));
  }

  updateServer(personalDetails, contactDetails, companyDetails) {
    // console.log('Personal Details');
    // console.log(personalDetails);
    // console.log('Contact Details');
    // console.log(contactDetails);
    // console.log('Company Details');
    // console.log(companyDetails);
  }

  successMessage(refresh: boolean = false) {
    this.swalComp.title = 'Processed successfully';
    this.swalComp.type = 'success';
    this.swalComp.showCancelButton = false;
    this.swalComp.fire();
  }

  setImage(fileSystem: FileSystem[]) {
    this.pictureUrl = JSON.stringify(fileSystem);
  }

  ngOnInit() {
    if (this.imageFileUploadCrl) {
      this.imageFileUploadCrl.clearStorage();
    }
    this.userService.userProfile$.subscribe((userProfile) => {
      this.updateLocalProfile(userProfile);
    });
  }

}
