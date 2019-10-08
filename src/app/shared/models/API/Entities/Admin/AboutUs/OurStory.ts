import { UserProfile } from '../../UserProfile';

export interface OurStory {
    storyId: number;
    translations: OurStoryTranslation[];
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
}

export interface OurStoryTranslation {
    translationId: number;
    language: string;
    content: string;
    privacy: string;
    termsandConditions: string;
    disclaimer: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    storyId: number;
    ourStory: OurStory;
}