import { UserProfile } from '../UserProfile';

export interface Hero {
    heroId: number;
    images: string;
    entryDate: string;
    enteredBy: UserProfile;
    translations: HeroContent[];
}

export interface HeroContent {
    heroContentId: number;
    title: string;
    language: string;
    entryDate: string;
    enteredBy: UserProfile;
    heroId: number;
    hero: Hero;
}