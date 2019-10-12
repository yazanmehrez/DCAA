import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import * as $ from 'jquery';
import {Router} from '@angular/router';
import {NgbDropdown} from '@ng-bootstrap/ng-bootstrap';
import {HttpErrorResponse} from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {LoginComponent} from '../../Accounts/login/login.component';
import {UserService} from 'src/app/shared/services/user.service';
import {MainRestService} from 'src/app/shared/API/main.rest';
import {TransporterService} from 'src/app/shared/transporter/transporter';
import {JWTService} from 'src/app/shared/utils/JWTtoken.service';
import {AppService} from '../../../app.service';
import {AuthService} from 'angularx-social-login';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';
import {TranslateService} from '@ngx-translate/core';
import {LocaleInfo} from '../../../shared/models/API/Entities/Admin/LocaleInfo';
import {GlobalSearchContent, Profile} from '../../../shared/models/userProfile';

@Component({
  selector: 'dcaa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  @ViewChild('loginComp', {static: false}) loginComp: LoginComponent;
  @ViewChild('LoginDrop', {static: false}) LoginDrop: NgbDropdown;
  profile: Profile;
  otherProfiles: Profile[] = [];
  profileSubscription: Subscription;
  otherProfileSubscription: Subscription;
  messenger: Subscription;
  allowVerification = true;
  emailIsConfirmed = true;
  adminNav = false;
  isAdmin: boolean;
  isWebMaster: boolean;
  // Font size Accessibility configurations
  fontSizeConfig = {
    fontSize: 1, // Font Size zoom is 1 for initial
    maxFontSize: 1.3, // Font Size zoom is 1 for initial
    minFontSize: 0.8, // Font Size zoom is 1 for initial
    offset: 0.1 // Font Size zoom is 1 for initial
  };
  locale: LocaleInfo;
  navRelative: any;
  locales: LocaleInfo[];
  searchResult: GlobalSearchContent[] = [];
  searchCtrl = new FormControl();
  currentLocale: LocaleInfo;
  searchInProgress: boolean;
  navbar = [
    {
      name: 'Home',
      childs: []
    },
    {
      name: 'About Us',
      childs: [{name: 'Sub 1'}, {name: 'Sub 2'}]
    },
    {
      name: 'E-Services',
      childs: []
    },
  ];
  @ViewChild('swalComp', {static: true}) private swalComp: SwalComponent;

  constructor(private userService: UserService, private restService: MainRestService,
              private transporter: TransporterService, private authService: AuthService,
              public _appService: AppService,
              public dialog: MatDialog, protected translate: TranslateService,
              private router: Router, private jwtService: JWTService) {

    this.searchCtrl.valueChanges.subscribe((value: string) => {
      if (value.length > 2) {
        this.searchInProgress = true;
        this.restService.globalSearch(value).then((data: GlobalSearchContent[]) => {
          this.searchResult = data;
          this.searchInProgress = false;
        }).catch((err: HttpErrorResponse) => {
          console.log(err);
          this.searchInProgress = false;
        });
      } else {
        this.searchResult = [];
      }
    });

  }

  login() {
    const dialogRef: MatDialogRef<LoginComponent> = this.dialog.open(LoginComponent,
      {panelClass: 'dcaa-login-register'});
  }

  logout() {
    if (this.profile.isSocialMedia) {
      this.authService.signOut();
    }
    this.userService.logout();
  }

  IsEmailVerifiedAsync(sendConfirmation = false) {
    if (this.profile) {
      this.restService.IsEmailVerifiedAsync(sendConfirmation).then((data: boolean) => {
        this.emailIsConfirmed = data;
        if (sendConfirmation && !data) {

          this.swalComp.title = this.translate.instant('emailConfirmationSent');
          this.swalComp.type = 'success';
          this.swalComp.showCancelButton = false;
          this.swalComp.fire();
        }
      }).catch((err: HttpErrorResponse) => {
        console.log(err);
      });
    }
  }

  gotoToPath(result: GlobalSearchContent) {
    this.router.navigate([result.routeUrl]);
  }

  openDropdown(event: any, myDrop: any, formNumber: number, dropdown: string = null) {
    event.stopPropagation();
    myDrop.open();
    if (formNumber && this.loginComp) {
      this.loginComp.formId = formNumber;
    }

  }

  verifyRoles() {
    this.isAdmin = this.jwtService.IsAdmin();
    this.isWebMaster = this.jwtService.IsWebMaster();
  }

  print() {
    window.print();
  }

  setBlackMode() {
    this._appService.blackMode = this._appService.blackMode === 'on' ? 'off' : 'on';
    localStorage.setItem('blackMode', this._appService.blackMode);
  }

  increaseFontSize() {
    if (this.fontSizeConfig.fontSize < this.fontSizeConfig.maxFontSize) {
      this.fontSizeConfig.fontSize += this.fontSizeConfig.offset;
    }
    $('body').css('zoom', this.fontSizeConfig.fontSize);
  }

  decreaseFontSize() {
    if (this.fontSizeConfig.fontSize > this.fontSizeConfig.minFontSize) {
      this.fontSizeConfig.fontSize -= this.fontSizeConfig.offset;
    }
    $('body').css('zoom', this.fontSizeConfig.fontSize);
  }

  resetFontSize() {
    this.fontSizeConfig.fontSize = 1;
    $('body').css('zoom', this.fontSizeConfig.fontSize);
  }

  preventClose(event: MouseEvent) {
    console.log(event);
    event.stopImmediatePropagation();
  }

  navbarConfig(event) {
    $('body').css('overflow', 'hidden');
    $('#mobileNavbar').show();
    $('#mobileOverlay').addClass('show-overlay');
  }

  ngOnInit() {
    const localeStr = localStorage.getItem('locale');
    this.locale = localeStr ? JSON.parse(localeStr) : null;
    if (!this.locale) {
      this.userService.ipFinder().then((result: any) => {
        this.restService.fetchLocale(result.region).then((locale: LocaleInfo) => {
          this.locale = locale;
          localStorage.setItem('locale', JSON.stringify(locale));
        });
        this.restService.fetchLocales().then((locales: LocaleInfo[]) => {
          this.locales = locales;
          localStorage.setItem('locales', JSON.stringify(locales));
        });
      });
    }
    this.profileSubscription = this.userService.activeProfile$.subscribe((profile: Profile) => {
      this.profile = profile;
      this.IsEmailVerifiedAsync(false);
      this.verifyRoles();
    });
    this.otherProfileSubscription = this.userService.otherProfiles$.subscribe((profiles: Profile[]) => {
      this.otherProfiles = profiles;
    });
    this.profileSubscription = this.userService.authNavStatus$.subscribe((result: { isLoggedIn: boolean, selfTriggered: boolean }) => {

      if (!result.isLoggedIn && result.selfTriggered) {
        this.router.navigate(['/']);
      }

    });

    this.messenger = this.transporter.message.subscribe((result: { type: string, data: any }) => {

      if (result) {
        if (result.type === 'navChange') {
          this.adminNav = result.data;
        }

        if (result.type === 'navRelative') {
          this.navRelative = result.data;
        }

        if (result.type === 'allowVerification') {
          this.allowVerification = result.data;
        }

        if (result.type === 'sessionExpired' && result.data === true) {
          this.logout();
          if (this.LoginDrop) {
            this.LoginDrop.open();
          }

        }
      }

    });

    const usersData: { profile: Profile, profiles: Profile[] } = this.userService.isLoggedIn();
    if (usersData) {
      this.profile = usersData.profile;
      this.otherProfiles = usersData.profiles;
      this.verifyRoles();
      this.IsEmailVerifiedAsync(false);
    }

    $('.nav-item').hover(
      function () {
        $(this).children('.dropdown-menu').addClass('show').removeClass('hide');
      }, function () {
        $(this).children('.dropdown-menu').addClass('hide').removeClass('show');
      }
    ).click(
      function () {
        $(this).children('.dropdown-menu').removeClass('show');
        window.scrollBy({
          top: 400,
          left: 0,
          behavior: 'smooth'
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.profileSubscription.unsubscribe();
    this.otherProfileSubscription.unsubscribe();
    this.messenger.unsubscribe();
  }

}

