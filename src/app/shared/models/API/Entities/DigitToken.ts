import { FeatureSection } from 'src/app/views/Accounts/accountsmodel';
import { UserProfile } from './UserProfile';

export interface DigitToken {
    digitTokenId: number;
    digitCode: number;
    token: string;
    userName: string;
    sentToEmail: string;
    isSpent: boolean;
    featureSection: FeatureSection;
    entryDate: string;
    expires?: string;
    spentWhen?: string;
    userProfile: UserProfile;
}