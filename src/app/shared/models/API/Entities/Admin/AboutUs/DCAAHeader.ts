import { UserProfile } from '../../UserProfile';

export interface DCAAHeader {
    id: number;
    header: string;
    subHeader: string;
    image: string;
    stud: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
}