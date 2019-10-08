import { UserProfile } from './API/Entities/UserProfile';

export interface ContactFeedback {
  contactusId: number;
  name: string;
  formType: FormType;
  mobileNumber: string;
  emailAddress: string;
  message: string;
  entryDate: Date;
  userProfileId: number | null;
  enteredBy: UserProfile;
  captchaResponse: string;
}

export enum FormType {
  GeneralContact = 0,
  GeneralAndFeedBack,
  DGContact
}


