import { UserProfile } from '../../UserProfile';

export interface SocialMediaLinks {
    linkId: number;
    linkTitle: string;
    linkURL: string;
    icon: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
}