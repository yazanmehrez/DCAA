import { UserProfile } from '../../UserProfile';
import { LandingPermissionSetting } from './Subservices/LandingPermissionSetting';


export interface AirTransport {
    serviceId: number;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    translations: AirTransportTranslation[];
    landingPermissionSettings: LandingPermissionSetting[];
}

export interface AirTransportTranslation {
    translationId: number;
    name: string;
    description: string;
    language: string;
    entryDate: string;
    enteredById: number;
    enteredBy: UserProfile;
    serviceId: number;
    service: AirTransport;
}