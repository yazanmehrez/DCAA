import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';
import {UserService} from 'src/app/shared/services/user.service';
import {TransporterService} from 'src/app/shared/transporter/transporter';
import {CustomValidation} from 'src/app/shared/utils/customValidator';
import {Helper} from 'src/app/shared/utils/helpers';
import {ConfirmEmailPasswordModel} from '../../Accounts/accountsmodel';


@Component({
  selector: 'app-token-reset',
  templateUrl: './token-reset.component.html',
  styleUrls: ['./token-reset.component.scss']
})
export class TokenResetComponent implements OnInit {

  tokenReset: string;
  userName: string;
  resetType: string;
  confirmEmailErrors: any[] = [];
  resetpasswordSubmitted = false;
  resetpasswordForm: FormGroup;
  inProgress = false;
  fetchinginProgress = false;
  resetpasswordErrors = [];
  emailVerified = false;
  @ViewChild('swalComp', {static: true}) private swalComp: SwalComponent;

  constructor(private formBuilder: FormBuilder, private restService: UserService, private transporter: TransporterService,
              protected translate: TranslateService, private route: ActivatedRoute, private router: Router) {
  }

  get l() {
    return this.resetpasswordForm.controls;
  }

  prepareForm() {
    this.resetpasswordForm = this.formBuilder.group({
      newPassword: ['', Validators.compose([Validators.required, Validators.minLength(6), CustomValidation.cannotContainSpace])],
      confirmPassword: ['', Validators.required],
      token: [this.tokenReset, Validators.required],
      userName: [this.userName, Validators.required],
      captchaResponse: ['', Validators.compose([Validators.required])]
    });
  }


  updatePassword(formDirective: FormGroupDirective) {
    this.resetpasswordSubmitted = true;
    this.inProgress = true;

    // stop here if form is invalid
    if (this.resetpasswordForm.invalid) {
      this.inProgress = false;
      // this.localeErrors = Helper.errorsArray(err.error);
      return;
    }

    this.updateServer(formDirective);
  }

  updateServer(formDirective: FormGroupDirective) {
    // tslint:disable-next-line:prefer-const
    let model: ConfirmEmailPasswordModel = this.resetpasswordForm.value as ConfirmEmailPasswordModel;

    this.restService.resetPassword(model).then(() => {
      this.resetpasswordErrors = [];
      this.inProgress = false;
      this.successMessage(true);
      this.router.navigate(['/']);
    }).catch((err: HttpErrorResponse) => {
      this.inProgress = false;
      this.router.navigate(['/']);
      this.resetpasswordErrors = Helper.errorsArray(err);
    });
  }

  successMessage(refresh: boolean = false) {
    this.swalComp.title = this.translate.instant('processCompleted');
    this.swalComp.type = 'success';
    this.swalComp.showCancelButton = false;
    this.swalComp.fire();
  }


  ngOnInit() {
    this.tokenReset = this.route.snapshot.paramMap.get('resettoken');
    this.userName = this.route.snapshot.paramMap.get('userName');
    this.resetType = this.route.snapshot.paramMap.get('resetType');

    if (this.resetType === 'EmailConfirmation') {
      this.confirmEmail({userName: this.userName, token: this.tokenReset});
    }

    this.transporter.sendMessage({type: 'allowVerification', data: false});
    this.prepareForm();
  }

  confirmEmail(model: any) {
    this.restService.emailConfirmation(model).then((result: any) => {
      this.confirmEmailErrors = [];
      this.inProgress = false;
      this.emailVerified = true;
    }).catch((err: HttpErrorResponse) => {
      this.inProgress = false;
      this.confirmEmailErrors = Helper.errorsArray(err);
      console.log(err);
    });
  }

}
