import { UserProfile } from '../UserProfile';

export enum FeedBackType {
    Satisfied = 0,
    Neutral = 1,
    NotSatisfied = 2
}

export interface HMFeedback {
    feedBackId: number;
    feedBackType: FeedBackType;
    question: string;
    feedBack: string;
    mobileNumber: string;
    entryDate: string;
    userProfileId?: number;
    enteredBy: UserProfile;
}