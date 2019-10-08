import { UserProfile } from './UserProfile';

export interface QuickLink {
    quickLinkId: number;
    linkUrl: string;
    column: number;
    entryDate: string;
    enteredById: number;
    enteredBy: UserProfile;
    translations: QuickLinkContent[];
}

export interface QuickLinkContent {
    quickLinkContentId: number;
    title: string;
    language: string;
    entryDate: string;
    enteredById: number;
    enteredBy: UserProfile;
    quickLinkId: number;
    quickLink: QuickLink;
}