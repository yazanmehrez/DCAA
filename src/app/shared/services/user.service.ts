import { Injectable, NgZone } from '@angular/core';



import { UserNameModel, RegistrationViewModel } from '../models/user.registration.interface';
import { ConfigService } from '../utils/config.service';

import {BaseService} from './base.service';


import { BehaviorSubject } from 'rxjs';

// Add the RxJS Observable operators we need in this app.

import { HttpClient } from '@angular/common/http';
import { Credentials } from '../models/credentials.interface';
import { Profile, LoginAnalytic, IpapiResponse, SocialUserExtended } from '../models/userProfile';

import { ChangePasswordViewModel, EmailModel, DigitModel, ChangeEmailModel } from 'src/app/views/Accounts/accountsmodel';


@Injectable()

export class UserService extends BaseService {
  baseUrl = '';

  // Observable navItem source
  // tslint:disable-next-line:variable-name
  private _authNavStatusSource = new BehaviorSubject<{}>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private profilesSource = new BehaviorSubject<Profile[]>([]);
  // Observable navItem stream
  otherProfiles$ = this.profilesSource.asObservable();

  private activeProfileSource = new BehaviorSubject<Profile>(null);
  // Observable navItem stream
  activeProfile$ = this.activeProfileSource.asObservable();

  private loggedIn = false;
  progressCount = 0;
  constructor(public configService: ConfigService, public httpClient: HttpClient, private ngZone: NgZone) {
    super(httpClient);
    this.loggedIn = !!localStorage.getItem('auth_token');
    // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
    // header component resulting in authed user nav links disappearing despite the fact user is still logged in
    this._authNavStatusSource.next(this.loggedIn);
    this.baseUrl = configService.getApiURI();

    this.currentProgress.subscribe((progress: string) => {
      this.ngZone.run(() => {
        this.progressCount = Number(progress);
      });
    });
  }

  register(registerModel: RegistrationViewModel) {
    return this.restRequest(registerModel, `${this.baseUrl}/api/accounts`, null);
  }

  requestPasswordToken(usernameModel: UserNameModel) {
    return this.restRequest(usernameModel, `${this.baseUrl}/api/PasswordResetToken`, null);
  }


  findAndRemoveProfile(identityId: string): Profile[] {
    const profiles: Profile[] = JSON.parse(localStorage.getItem('profiles'));

    const updateProfiles: Profile[] = profiles.filter((profile: Profile) => {
      console.log(profile.id, identityId);
      return (profile.id !== identityId);
    });

    return updateProfiles;
  }


  findAndActivateProfile(identityId: string): Profile {
    const profiles: Profile[] = JSON.parse(localStorage.getItem('profiles'));
    const activeProfile: Profile = profiles.find((profile: Profile) => {
      return profile.id === identityId;
    });

    localStorage.setItem('profile', JSON.stringify(activeProfile));

    this.activeProfileSource.next(activeProfile); // Update active profile
    return activeProfile;
  }

  setUpAuthenticatedUser(res: any) {
    const profile = JSON.stringify(res.profile);
    localStorage.setItem('profile', profile);
    localStorage.setItem('lastLocale', JSON.stringify(res.profile.locale));

    this.activeProfileSource.next(res.profile); // Update active profile

    const profiles: string = localStorage.getItem('profiles');
    let profilesArray: Profile[] = JSON.parse(profiles) || [];

    if (profiles) {
      profilesArray = this.findAndRemoveProfile(res.profile.id);
    }

    profilesArray.push(res.profile);
    localStorage.setItem('profiles', JSON.stringify(profilesArray));

    this.profilesSource.next(profilesArray);
  }

  loginAnalyticsPost(loginAnalyticResponse: LoginAnalytic) {
    this.restRequest(loginAnalyticResponse, `${this.baseUrl}/api/LoginAnalytics`, null).then(() => {

    }).catch(err => {
      console.log(err);
    });
  }

  ipFinder() {
    return new Promise((resolver, reject) => {
      this.restRequest(null, `https://ipinfo.io?token=${this.configService.getIpInfoToken()}`, null, 'GET')
      .then((response: any) => {
        resolver(response);
      }).catch(err => {
        this.restRequest(null, 'https://ipapi.co/json', null, 'GET').then((result: IpapiResponse) => {
          // Ip search option 2
          resolver(result);
        }).catch(e => {
          reject(e);
        });
      });
    });

  }


  externalLogin(socialUser: SocialUserExtended, endPoint: string) {
    return new Promise((resolver, reject) => {
      this.restRequest(socialUser, `${this.baseUrl}/${endPoint}`, null).then((res: any) => {
        localStorage.setItem('auth_token', res.token.Auth_token);
        this.setUpAuthenticatedUser(res);
        this.loggedIn = true;
        this._authNavStatusSource.next(this.loggedIn);
        this.restRequest(null, `https://ipinfo.io?token=${this.configService.getIpInfoToken()}`, null, 'GET')
        .then((response: any) => {
          const result: IpapiResponse = new IpapiResponse();
          result.city = response.city;
          result.country = response.country;
          result.ip = response.ip;
          result.latitude = (response.loc as string).split(',')[0];
          result.longitude = (response.loc as string).split(',')[1];
          result.region = response.region;
          // Ip search option 1
          const loginAnalyticResponse: LoginAnalytic = this.prepareLoginAnalytic(result, res.profile.customerId);
          this.loginAnalyticsPost(loginAnalyticResponse);
        }).catch(err => {
          this.restRequest(null, 'https://ipapi.co/json', null, 'GET').then((result: IpapiResponse) => {
            // Ip search option 2
            const loginAnalyticResponse: LoginAnalytic = this.prepareLoginAnalytic(result, res.profile.customerId);
            this.loginAnalyticsPost(loginAnalyticResponse);
          });
        });
      });
    });

  }

  login(credentials: Credentials) {
    return new Promise((resolver, reject) => {
      this.restRequest(credentials, `${this.baseUrl}/api/auth/login`, null).then((res: any) => {
        localStorage.setItem('auth_token', res.token.Auth_token);
        this.setUpAuthenticatedUser(res);

        this.loggedIn = true;
        this._authNavStatusSource.next(this.loggedIn);
        this.restRequest(null, `https://ipinfo.io?token=${this.configService.getIpInfoToken()}`, null, 'GET')
        .then((response: any) => {
          const result: IpapiResponse = new IpapiResponse();
          result.city = response.city;
          result.country = response.country;
          result.ip = response.ip;
          result.latitude = (response.loc as string).split(',')[0];
          result.longitude = (response.loc as string).split(',')[1];
          result.region = response.region;
          // Ip search option 1
          const loginAnalyticResponse: LoginAnalytic = this.prepareLoginAnalytic(result, res.profile.userProfileId);
          this.loginAnalyticsPost(loginAnalyticResponse);
        }).catch(err => {
          this.restRequest(null, 'https://ipapi.co/json', null, 'GET').then((result: IpapiResponse) => {
            // Ip search option 2
            const loginAnalyticResponse: LoginAnalytic = this.prepareLoginAnalytic(result, res.profile.userProfileId);
            this.loginAnalyticsPost(loginAnalyticResponse);
          });
        });

        resolver(res);
      }).catch(err => {
        reject(err);
      });
    });

  }
  prepareLoginAnalytic(result: IpapiResponse, userProfileId: number): LoginAnalytic {
    const loginAnalyticResponse: LoginAnalytic = result as LoginAnalytic;
    loginAnalyticResponse.userProfileId = userProfileId;
    loginAnalyticResponse.browser = 'Browser CodeName: ' + navigator.appCodeName +
                                    ', Browser Name: ' + navigator.appName +
                                    ', Browser Version: ' + navigator.appVersion +
                                    ', Cookies Enabled: ' + navigator.cookieEnabled +
                                    ', Platform: ' + navigator.platform +
                                    ', User-agent header: ' + navigator.userAgent;
    return result as LoginAnalytic;
  }

  logout() {

    localStorage.removeItem('profile');
    localStorage.removeItem('profiles');
    localStorage.removeItem('auth_token');
    this.activeProfileSource.next(null);
    this.profilesSource.next(null);
    this.loggedIn = false;
    this._authNavStatusSource.next({loggedIn: this.loggedIn, selfTriggered: true});
  }

  isLoggedIn(): {profile: Profile, profiles: Profile[]} {
    const profiles: Profile[] = JSON.parse(localStorage.getItem('profiles'));
    const profile: Profile = JSON.parse(localStorage.getItem('profile'));
    if (profile) {
      return {profile, profiles};
    } else {
      return null;
    }

  }


  changePassword(model: ChangePasswordViewModel, type: string = 'POST') {
    return this.restRequest(model, `${this.baseUrl}/api/ChangePassword`, null, type);
  }

  changeEmail(model: EmailModel, type: string = 'POST') {
    return this.restRequest(model, `${this.baseUrl}/api/ChangeEmailRequestToken`, null, type);
  }

  getToken(model: DigitModel, type: string = 'POST') {
    return this.restRequest(model, `${this.baseUrl}/api/GetDigit`, null, type);
  }

  setEmail(model: ChangeEmailModel, type: string = 'POST') {
    return this.restRequest(model, `${this.baseUrl}/api/ChangeEmail`, null, type);
  }
}

