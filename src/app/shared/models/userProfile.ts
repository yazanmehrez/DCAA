import {ChartResult} from './chart';
import {SocialUser} from 'angularx-social-login';

export class Profile {
  userProfileId: number;
  id: string;
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  pictureUrl: string;
  location: string;
  locale: LocaleInfo;
  gender: string;
  isFacebook: boolean;
  isGoogle: boolean;
  isSocialMedia: boolean;
}

export interface SocialUserExtended extends SocialUser {
  localeId: number | null;
}

export class LocaleInfo {
  localeId: number;
  country: string;
  altCountry: string;
  city: string;
  altCity: string;
  state: string;
  isRTL: boolean;
  spokenLanguage: string;
  currency: string;
  timezone: string;
  countryCode: string;
  language: string;
  entryDate: Date | string;
  enteredBy: UserProfile;

}

export interface UserProfile {
  id: number;
  identityId: string;
  identity: AppUser;  // navigation property
  firstName: string;
  pictureUrl: string;
  lastName: string;
  gender: string;
  dob: Date | string | null;
  entryDate: Date | string;
  localeId: number | null;
  locale: LocaleInfo;
}

export interface ApplicationRole {
  userRoles: ApplicationUserRole[];
}

export interface ApplicationUserRole {
  appUser: AppUser;
  role: ApplicationRole;
}

export interface UserProfilePlus {
  userProfile: UserProfile;

  roles: ApplicationUserRole[];
  isAdmin: boolean;
  isWebMaster: boolean;
  userName: string;
  email: string;
  isEmailConfirmed: boolean;
  city: string;
}

export interface UserAnalytic {
  registrationAnalyticId: number;

  userProfileId: number;
  identityId: string;

  entryDate: Date | string;
}

export interface LoginAnalytic {
  loginAnalyticId: number;
  browser: string;
  ip: string;
  city: string;
  region: string;
  regionCode: string;
  country: string;
  countryName: string;
  continentCode: string;
  inEu: string;
  postal: string;
  latitude: string;
  longitude: string;
  latlong: string;
  timezone: string;
  utcOffset: string;
  languages: string;
  countryCallingCode: string;
  currency: string;
  asn: string;
  org: string;
  entryDate: Date | string;
  userProfileId: number;
  userProfile: UserProfile;
}

export class IpapiResponse {
  ip: string;
  city: string;
  region: string;
  regionCode: string;
  country: string;
  countryName: string;
  continentCode: string;
  inEu: string;
  postal: string;
  latitude: string;
  longitude: string;
  latlong: string;
  timezone: string;
  utcOffset: string;
  languages: string;
  countryCallingCode: string;
  currency: string;
  asn: string;
  org: string;
}

export interface LoginAnalyticExtended {
  loginAnalytic: LoginAnalytic;
  userName: string;
  firstName: string;
  lastName: string;
  pictureUrl: string;
}

export interface LoginAnalyticWithChart {
  loginAnalytics: LoginAnalytic[];
  chartResult: ChartResult;
}

export interface UserAnalyticWithChart {
  UserAnalytics: UserAnalytic[];
  chartResult: ChartResult;
}

export class GlobalSearchContent {
  img: string;
  text: string;
  routeUrl: string;
}

export interface AppUser {
  // Extended Properties
  facebookId: number | null;
}

