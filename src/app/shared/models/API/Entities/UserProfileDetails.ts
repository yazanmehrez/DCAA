import {UserProfile} from './UserProfile';
import {LocaleInfo} from './Admin/LocaleInfo';
import { IndividualType } from '../Enums/AccountEnums';


export interface IndividualDetails {
  id: number;
  userProfileID: number;
  userProfile: UserProfile;
  individualType: IndividualType;
  emiratesID: string;
  passportVisaCopy: string;
  emiratesIDCopy: string;
  passportVisa: string;
  entryDate: string;
}

export interface ContactDetails {
  id: number;
  userProfileID: number;
  userProfile: UserProfile;
  firstName: string;
  middleName: string;
  lastName: string;
  localeId: number;
  localeInfo: LocaleInfo;
  mobileNumber: string;
  pOBox: string;
  fax: string;
  entryDate: string;
}
