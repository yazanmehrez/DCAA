import { UserProfile } from '../../UserProfile';

export interface ContactInfoData {
    id: number;
    translation: ContactInfoTranslation[];
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
}

export interface ContactInfoTranslation {
    translationId: number;
    phoneNumber: string;
    overseasNumber: string;
    fax: string;
    email: string;
    workDays: string;
    workHours: string;
    address: string;
    image: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    contactInfoId: number;
    contactInfoData: ContactInfoData;
}