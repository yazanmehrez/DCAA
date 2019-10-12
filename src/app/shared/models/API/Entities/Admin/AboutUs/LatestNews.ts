import { UserProfile } from '../../UserProfile';
import { NewsType } from '../../../Enums/AdminEnum';

declare interface LatestNews {
    latestNewsId: number;
    translations: LatestNewsTranslation[];
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
}

declare interface LatestNewsTranslation {
    translationId: number;
    newsTitle: string;
    newsURL: string;
    newsType: NewsType;
    newsDescription: string;
    newsContent: string;
    newsAttachments: string;
    language: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    latestNewsId: number;
    latestNews: LatestNews;
}
