import { UserProfile } from './UserProfile';

export interface AboutUs {
    aboutusId: number;
    translations: AboutusTranslation[];
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
}

export interface AboutusTranslation {
    translationId: number;
    aboutUsContent: string;
    visionMisionContent: string;
    rolesandRespContent: string;
    orgStructContent: string;
    language: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    aboutusId: number;
    aboutUs: AboutUs;
}