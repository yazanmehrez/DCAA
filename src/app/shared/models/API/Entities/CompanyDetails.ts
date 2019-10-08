import { LocaleInfo } from './Admin/LocaleInfo';
import { UserProfile } from './UserProfile';


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
    iD: number;
    companyName: string;
    address: string;
    contactNo: string;
    officeNo: string;
    companyFax: string;
    companyPOBox: string;
    companyEmail: string;
    licenseIssuedBy: LicenseIssuedBy;
    localeId: number;
    localeInfo: LocaleInfo;
    tradeLicenseNo: string;
    tradeIssueDate: string;
    tradeExpiryDate: string;
    tradeLicenseCopy: string;
    companyDetailsUserProfile: CompanyDetailsUserProfile[];
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