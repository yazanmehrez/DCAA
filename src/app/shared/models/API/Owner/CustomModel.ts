import { ApplicationUserRole } from '../Entities/ApplicationUserRole';
import { UserProfile } from '../Entities/UserProfile';


export interface UserProfilePlus {
    userProfile: UserProfile;
    roles: ApplicationUserRole[];
    isAdmin: boolean;
    userName: string;
    email: string;
    isEmailConfirmed: boolean;
    city: string;
    isWebMaster: boolean;
}