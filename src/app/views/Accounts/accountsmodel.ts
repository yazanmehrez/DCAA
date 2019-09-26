import { UserProfile } from 'src/app/shared/models/userProfile';

export enum FeatureSection {
    none = 0,
    passwordResetRequest,
    emailVerification,
    emailChange,
    accountCreated
}

export interface ChangePasswordViewModel {
    oldPassword: string;

    newPassword: string;

    confirmPassword: string;
}

export interface EmailModel {
    email: string;
}

export class DigitModel {
    digit: number;
}

export class DigitToken {
    digitTokenId: number;
    digitCode: number;
    token: string;
    userName: string;
    sentToEmail: string;
    isSpent: boolean;
    featureSection: FeatureSection;
    entryDate: Date | string;
    expires: Date | string | null;
    spentWhen: Date | string | null;
    userProfile: UserProfile;

}

export class ChangeEmailModel {
    newEmail: string;

    userName: string;

    token: string;
}
