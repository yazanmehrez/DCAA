import { UserProfile } from '../UserProfile';

export enum FormType {
    GeneralContact = 1,
    GeneralAndFeedBack = 2,
    DGContact = 3
}

export interface ContactFeedback {
    contactusId: number;
    name: string;
    formType: FormType;
    mobileNumber: string;
    emailAddress: string;
    message: string;
    entryDate: string;
    captchaResponse: string;
    userProfileId?: number;
    enteredBy: UserProfile;
}
