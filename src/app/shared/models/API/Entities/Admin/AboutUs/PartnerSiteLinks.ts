import { UserProfile } from '../../UserProfile';

export interface PartnerSiteLinks {
    linkId: number;
    linkTitle: string;
    linkURL: string;
    attachments: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
}