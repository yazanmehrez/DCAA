import { UserProfile } from '../../UserProfile';

export interface DCAAStrategies {
    strategiesId: number;
    translations: DCAAStrategiesTranslation[];
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
}

export interface DCAAStrategiesTranslation {
    translationId: number;
    strategiesContent: string;
    strategiesSubContent: string;
    language: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    strategiesId: number;
    dCAAStrategies: DCAAStrategies;
}