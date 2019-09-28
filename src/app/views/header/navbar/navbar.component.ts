import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import * as $ from 'jquery';
import {Router} from '@angular/router';
import {NgbDropdown} from '@ng-bootstrap/ng-bootstrap';
import {HttpErrorResponse} from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {LoginComponent} from '../../Accounts/login/login.component';
import {GlobalSearchContent, LocaleInfo, Profile} from 'src/app/shared/models/userProfile';
import {UserService} from 'src/app/shared/services/user.service';
import {MainRestService} from 'src/app/shared/API/main.rest';
import {TransporterService} from 'src/app/shared/transporter/transporter';
import {JWTService} from 'src/app/shared/utils/JWTtoken.service';
import {AppService} from '../../../app.service';
import {AuthService} from 'angularx-social-login';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

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

  adminNav = false;
  isAdmin: boolean;
  isWebMaster: boolean;

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

  constructor(private userService: UserService, private restService: MainRestService,
              private transporter: TransporterService, private authService: AuthService,
              public _appService: AppService,
              public dialog: MatDialog,
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

  logout() {
    if (this.profile.isSocialMedia) {
      this.authService.signOut();
    }
    this.userService.logout();
  }

  verifyRoles() {
    this.isAdmin = this.jwtService.IsAdmin();
    this.isWebMaster = this.jwtService.IsWebMaster();
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
        console.log(result);
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
    }
    console.log(this.profile);
  }

  ngOnDestroy(): void {
    this.profileSubscription.unsubscribe();
    this.otherProfileSubscription.unsubscribe();
    this.messenger.unsubscribe();
  }

}

