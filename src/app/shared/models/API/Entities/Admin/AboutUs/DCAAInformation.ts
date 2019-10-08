import { UserProfile } from '../../UserProfile';

export interface DCAAInformation {
    informationId: number;
    translations: DCAAInformationTranslation[];
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
}

export interface DCAAInformationTranslation {
    translationId: number;
    title: string;
    description: string;
    attachments: string;
    language: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    informationId: number;
    dCAAInformation: DCAAInformation;
}