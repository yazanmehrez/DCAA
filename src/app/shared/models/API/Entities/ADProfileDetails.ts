import { UserProfile } from './UserProfile';

export interface ADProfileDetails {
    iD: number;
    userProfileID: number;
    userProfile: UserProfile;
    staffNo: string;
    title: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    accountName: string;
    manager: string;
    sector: string;
    department: string;
    section: string;
    phone: string;
    mngrProfileID?: number;
    managerProfile: UserProfile;
    entryDate: string;
}