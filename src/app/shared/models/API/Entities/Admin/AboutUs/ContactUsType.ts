import { UserProfile } from '../../UserProfile';

export interface ContactUsType {
    typeId: number;
    translations: ContactUsTypeTranslation[];
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
}

export interface ContactUsTypeTranslation {
    translationId: number;
    title: string;
    contactPersonsEmails: string;
    language: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    typeId: number;
    contactUsType: ContactUsType;
}