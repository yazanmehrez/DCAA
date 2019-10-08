import { UserProfile } from '../../UserProfile';

export interface Services {
    serviceId: number;
    icon: string;
    link: string;
    isPopular: boolean;
    translations: ServiceTranslation[];
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
}

export interface ServiceTranslation {
    translationId: number;
    title: string;
    description: string;
    language: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    serviceId: number;
    services: Services;
}