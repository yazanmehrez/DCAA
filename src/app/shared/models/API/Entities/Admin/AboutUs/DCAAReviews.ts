import { UserProfile } from '../../UserProfile';

export interface DCAAReviews {
    reviewId: number;
    translations: DCAAReviewsTranslation[];
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
}

export interface DCAAReviewsTranslation {
    translationId: number;
    name: string;
    designation: string;
    review: string;
    attachments: string;
    language: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    reviewId: number;
    dCAAReviews: DCAAReviews;
}