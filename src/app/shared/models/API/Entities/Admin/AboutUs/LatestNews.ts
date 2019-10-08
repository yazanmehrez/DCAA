import { UserProfile } from '../../UserProfile';

export interface LatestNews {
    latestNewsId: number;
    translations: LatestNewsTranslation[];
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
}

export interface LatestNewsTranslation {
    translationId: number;
    newsTitle: string;
    newsURL: string;
    newsDescription: string;
    newsAttachments: string;
    language: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    latestNewsId: number;
    latestNews: LatestNews;
}