import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {UserService} from 'src/app/shared/services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidation, MustMatch} from 'src/app/shared/utils/customValidator';
import {Credentials} from 'src/app/shared/models/credentials.interface';
import {Helper} from 'src/app/shared/utils/helpers';
import {LocaleInfo, Profile, SocialUserExtended} from 'src/app/shared/models/userProfile';
import {HttpErrorResponse} from '@angular/common/http';
import {RegistrationViewModel, UserNameModel} from 'src/app/shared/models/user.registration.interface';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';

import {NgbDropdown} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser} from 'angularx-social-login';
import {MatDialog} from '@angular/material';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    currentLocale: LocaleInfo;
    locales: LocaleInfo[] = [];
    filteredLocale: Observable<LocaleInfo[]>;
    formId = 1;
    registerForm: FormGroup;
    loginForm: FormGroup;
    fpForm: FormGroup;
    loginSubmitted = false;
    regSubmitted = false;
    fpSubmitted = false;
    startProgress = false;
    inProgress = false;
    loginErrors: string[] = [];
    regErrors: string[] = [];
    fpErrors: string[] = [];
    @Input() dropdownInstance: NgbDropdown;
    @ViewChild('regSwal', {static: true}) private regSwal: SwalComponent;
    @ViewChild('fpSwal', {static: true}) private fpSwal: SwalComponent;

    private socialUser: SocialUserExtended;
    private socialLoggedIn: boolean;

    constructor(private userService: UserService, private loginFormBuilder: FormBuilder, private regFormBuilder: FormBuilder,
                public dialog: MatDialog, private fpFormBuilder: FormBuilder, private authService: AuthService) {

    }

    get r() {
        return this.registerForm.controls;
    }

    get l() {
        return this.loginForm.controls;
    }

    get fp() {
        return this.fpForm.controls;
    }

    displayFn(localeId: number) {
        const localesStr = localStorage.getItem('locales');
        this.locales = (localesStr ? JSON.parse(localesStr) : []) as LocaleInfo[];

        const result: string = this.locales ? this.locales.find(l => l.localeId === localeId).city : null;
        return result;
    }

    localeSelected(locale: LocaleInfo) {
        setTimeout(() => {
            this.dropdownInstance.open();
        }, 0);

    }

    signInWithGoogle(): void {
        this.subscribeSocialLogin();
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    signInWithFB(): void {
        this.subscribeSocialLogin();
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    signOut(): void {
        this.authService.signOut();
    }

    subscribeSocialLogin() {

        this.authService.authState.subscribe((user: SocialUser) => {
            if (user) {
                this.socialUser = user as SocialUserExtended;
                this.socialLoggedIn = (user != null);

                this.socialUser.localeId = this.currentLocale ? this.currentLocale.localeId : null;

                this.loginSubmitted = true;
                this.inProgress = true;

                this.userService.externalLogin(this.socialUser, `api/externalauth/${this.socialUser.provider.toLocaleLowerCase()}`).then(() => {
                    this.regErrors = [];
                    this.inProgress = false;
                }).catch((err: HttpErrorResponse) => {
                    this.inProgress = false;
                    this.loginErrors = Helper.errorsArray(err);
                });
            }

        });
    }

    ngOnInit() {

        const localeStr = localStorage.getItem('locale');
        this.currentLocale = (localeStr ? JSON.parse(localeStr) : null) as LocaleInfo;

        const localesStr = localStorage.getItem('locales');
        this.locales = (localesStr ? JSON.parse(localesStr) : []) as LocaleInfo[];

        this.registerForm = this.regFormBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            userName: ['', Validators.compose([Validators.required, CustomValidation.cannotContainSpace])],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6), CustomValidation.cannotContainSpace])],
            confirmPassword: ['', Validators.required],
            localeId: [this.currentLocale ? this.currentLocale.localeId : null, Validators.required],
            location: [this.currentLocale ? this.currentLocale.city : null]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });


        this.loginForm = this.loginFormBuilder.group({
            userName: ['', Validators.compose([Validators.required, CustomValidation.cannotContainSpace])],
            password: ['', Validators.compose([Validators.required, CustomValidation.cannotContainSpace])],
            captchaResponse: ['', Validators.compose([Validators.required])],
        });

        this.fpForm = this.fpFormBuilder.group({
            userName: ['', Validators.compose([Validators.required, CustomValidation.cannotContainSpace])],
        });


        this.userService.activeProfile$.subscribe((profile: Profile) => {
            this.inProgress = false;
            console.log('Result of login', profile);
        });

        this.filteredLocale = this.registerForm.controls.localeId.valueChanges
            .pipe(
                startWith(''),
                map(ins => ins ? this._filterLocale(ins) : this.locales.slice())
            );

    }

    login() {

        this.loginSubmitted = true;
        this.inProgress = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            this.inProgress = false;
            return;
        }

        this.userService.login(this.loginForm.value as Credentials).then(() => {
            this.regErrors = [];
            this.inProgress = false;
        }).catch((err: HttpErrorResponse) => {
            this.inProgress = false;
            this.loginErrors = Helper.errorsArray(err);
            console.log(this.loginErrors, err.error);
        });
    }

    register() {
        this.regSubmitted = true;
        this.inProgress = true;


        // stop here if form is invalid
        if (this.registerForm.invalid) {
            this.inProgress = false;
            // this.regErrors = Helper.errorsArray(err.error);
            return;
        }

        this.userService.register(this.registerForm.value as RegistrationViewModel).then((result: string) => {
            console.log(result);
            this.regErrors = [];
            this.inProgress = false;
            this.regSwal.fire();
        }).catch((err: HttpErrorResponse) => {
            this.inProgress = false;
            this.regErrors = Helper.errorsArray(err);
        });
    }

    forgotPassword() {
        this.fpSubmitted = true;
        this.inProgress = true;
        // stop here if form is invalid
        if (this.fpForm.invalid) {
            this.inProgress = false;
            return;
        }

        this.userService.requestPasswordToken(this.fpForm.value as UserNameModel).then(() => {
            this.fpErrors = [];
            this.fpSwal.fire();
            this.inProgress = false;
        }).catch((err: HttpErrorResponse) => {
            this.inProgress = false;
            this.fpErrors = Helper.errorsArray(err);
        });
    }

    private _filterLocale(value: string): LocaleInfo[] {
        const filterValue = value.toLowerCase();

        return this.locales.filter(ins =>
            ins.city.toLowerCase().indexOf(filterValue) === 0);
    }

}
