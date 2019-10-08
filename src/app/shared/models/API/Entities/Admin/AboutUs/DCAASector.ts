import { UserProfile } from '../../UserProfile';

export interface DCAASector {
    sectorId: number;
    translations: DCAASectorTranslation[];
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
}

export interface DCAASectorTranslation {
    translationId: number;
    sectorContent: string;
    sectorSubContent: string;
    language: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    sectorId: number;
    dCAASector: DCAASector;
}