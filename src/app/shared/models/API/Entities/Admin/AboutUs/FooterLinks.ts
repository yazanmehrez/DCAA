import { UserProfile } from '../../UserProfile';

export enum Category {
    Apps = 0,
    Advertisements = 1
}

export interface AppsandAdvertisements {
    appandAdvId: number;
    category: Category;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    appsandAdvertisementTranslation: AppsandAdvertisementTranslation[];
}

export interface AppsandAdvertisementTranslation {
    translationId: number;
    title: string;
    url: string;
    attachments: string;
    language: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    appandAdvId: number;
    appsandAdvertisements: AppsandAdvertisements;
}