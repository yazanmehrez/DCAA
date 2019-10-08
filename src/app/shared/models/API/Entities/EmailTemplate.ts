import { UserProfile } from './UserProfile';

export enum FeatureSection {
    None = 0,
    PasswordResetRequest = 1,
    EmailVerification = 2,
    EmailChange = 3,
    AccountCreated = 4
}

export interface EmailHeaderFooter {
    emailHeaderFooterId: number;
    title: string;
    propertiesField: string;
    headerHtml: string;
    footerHtml: string;
    entryDate: string;
    enteredBy: UserProfile;
    templates: EmailTemplate[];
}

export interface EmailTemplate {
    emailTemplateId: number;
    propertiesField: string;
    featureSection: FeatureSection;
    emailHeaderFooterId?: number;
    emailHeaderFooter: EmailHeaderFooter;
    entryDate: string;
    enteredBy: UserProfile;
    translations: EmailTemplateContent[];
}

export interface EmailTemplateContent {
    emailTemplateContentId: number;
    htmlBody: string;
    language: string;
    entryDate: string;
    enteredBy: UserProfile;
    emailTemplateId: number;
    emailTemplate: EmailTemplate;
}