import {LocaleInfo} from './Admin/LocaleInfo';
import {UserProfile} from './UserProfile';
import {AccountType, CompanyLocation} from '../Enums/AccountEnums';
import {SubServices} from './Admin/AboutUs/SubServices';


export enum LicenseIssuedBy {
  DubaiEconomicDepartment = 1,
  OutsideUAE = 2,
  InsideUAE = 3
}

export enum Profiletype {
  Administrator = 1,
  Associate = 2
}

export interface CompanyDetails {
  id: number;
  companyName: string;
  accountType: AccountType;
  address: string;
  contactNo: string;
  officeNo: string;
  companyFax: string;
  companyPOBox: string;
  companyEmail: string;
  companyLocation: CompanyLocation;
  localeId: number;
  localeInfo: LocaleInfo;

  companyZoneID: number;
  companyZone: CompanyZone;

  tradeLicenseNo: string;
  tradeIssueDate: string;
  tradeExpiryDate: string;
  tradeLicenseCopy: string;
  companyDetailsUserProfile: CompanyDetailsUserProfile[];
  companyDetailsNatureOfBusiness: CompanyDetailsNatureOfBusiness[];

  entryDate: string;
  userProfileId: number;
  enteredBy: UserProfile;
}

export interface CompanyDetailsUserProfile {
  userProfileID: number;
  userProfile: UserProfile;
  companyDetailsID: number;
  companyDetails: CompanyDetails;
  profiletype: Profiletype;
  entryDate: string;
}

export interface CompanyZone {
  iD: number;
  logo: string;
  name: string;
  localeId: number;
  localeInfo: LocaleInfo;
  entryDate: string;
  userProfileID: number;
  enteredBy: UserProfile;

}

export interface NatureOfBusiness {
  natureOfBusinessID: number;
  logo: string;
  entryDate: string;
  companyDetailsNatureOfBusiness: CompanyDetailsNatureOfBusiness[];
  subServiceId: number;
  subServices: SubServices;
  localeId: number;
  localeInfo: LocaleInfo;
  userProfileID: number;
  enteredBy: UserProfile;
  translations: NatureOfBusinessTranslation[];


}

export interface CompanyDetailsNatureOfBusiness {
  natureOfBusinessID: number;
  natureOfBusiness: NatureOfBusiness;
  companyDetailsID: number;
  companyDetails: CompanyDetails;
  profiletype: Profiletype;
  entryDate: string;
}


export interface NatureOfBusinessTranslation {
  translationId: number;
  title: string;
  description: string;
  language: string;
  entryDate: string;
  userProfileId: number;
  enteredBy: UserProfile;
  natureOfBusinessID: number;
  natureOfBusiness: NatureOfBusiness;
}
