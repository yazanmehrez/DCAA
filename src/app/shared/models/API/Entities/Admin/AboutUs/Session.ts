import { UserProfile } from '../../UserProfile';

export interface Session {
    sessionId: number;
    sessionDate: string;
    emailAddress: string;
    group: string;
    entryDate: string;
    chatters: Chatter[];
    userProfileId: number;
    enteredBy: UserProfile;
}

export interface Chatter {
    chatId: number;
    message: string;
    attachment: string;
    senderAvatar: string;
    firstName: string;
    lastName: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    sessionId: number;
    session: Session;
}