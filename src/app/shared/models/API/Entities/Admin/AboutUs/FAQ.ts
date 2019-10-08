import { UserProfile } from '../../UserProfile';

export interface FAQSection {
    id: number;
    entryDate: string;
    translations: FAQSectionTranslation[];
    fAQs: FAQ[];
    userProfileId: number;
    enteredBy: UserProfile;
}

export interface FAQSectionTranslation {
    translationid: number;
    entryDate: string;
    title: string;
    language: string;
    userProfileId: number;
    enteredBy: UserProfile;
    fAQSectionId: number;
    fAQSection: FAQSection;
}

export interface FAQ {
    fAQId: number;
    translations: FAQTranslation[];
    fAQSecId: number;
    fAQSections: FAQSection;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
}

export interface FAQTranslation {
    translationId: number;
    question: string;
    answer: string;
    language: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    fAQId: number;
    fAQ: FAQ;
}