import { LandingPermission } from '../../../User/Subservices/LandingPermission';
import { UserProfile } from '../../../UserProfile';
import { AirTransport } from '../AirTransport';



export interface LandingPermissionSetting {
    subserviceId: number;
    serviceId: number;
    service: AirTransport;
    contactId: number;
    contactPerson: Contact;
    periodOfOperations: PeriodOfOperation[];
    natureOfOperations: NatureOfOperation[];
    airportLandings: AirportLanding[];
    userProfileId: number;
    enteredBy: UserProfile;
    entryDate: string;
    translations: LandingPermissionSettingTranslation[];
}

export interface AirportLanding {
    id: number;
    translations: AirportLandingTranslation[];
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    subserviceId: number;
    subService: LandingPermissionSetting;
}

export interface AirportLandingTranslation {
    translationId: number;
    title: string;
    language: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    id: number;
    airportLanding: AirportLanding;
}

export interface NatureOfOperation {
    id: number;
    translations: NatureOfOperationTranslation[];
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    subserviceId: number;
    subService: LandingPermissionSetting;
    landingPermissions: LandingPermission[];
}

export interface NatureOfOperationTranslation {
    translationId: number;
    title: string;
    language: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    id: number;
    natureOfOperation: NatureOfOperation;
}

export interface PeriodOfOperation {
    periodId: number;
    price: number;
    translations: PeriodOfOperationTranslation[];
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    subserviceId: number;
    subService: LandingPermissionSetting;
    landingPermissions: LandingPermission[];
}

export interface Contact {
    contactId: number;
    phone: string;
    mobile: string;
    fax: string;
    email: string;
    callCenter: string;
    overseas: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    contactTranslations: ContactTranslation[];
}

export interface ContactTranslation {
    translationId: number;
    department: string;
    section: string;
    workingHours: string;
    workDays: string;
    locations: string;
    language: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    contactId: number;
    contact: Contact;
}

export interface PeriodOfOperationTranslation {
    translationId: number;
    title: string;
    language: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    periodId: number;
    periodOfOperation: PeriodOfOperation;
}

export interface LandingPermissionSettingTranslation {
    translationId: number;
    name: string;
    description: string;
    detailsHTML: string;
    language: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    subserviceId: number;
    subService: LandingPermissionSetting;
}