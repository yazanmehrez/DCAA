import { AirportLanding, NatureOfOperation, PeriodOfOperation } from '../../Admin/Services/Subservices/LandingPermissionSetting';
import { UserProfile } from '../../UserProfile';


export enum Route {
    ICAO = 1,
    IATA = 2
}

export enum TripDay {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7
}

export enum AttachmentType {
    AirOperator = 1,
    CertificateOfAirworthiness = 2,
    CertificateOfRegistration = 3,
    CertificateOfInsurance = 4,
    NoiseCertificate = 5,
    Others = 6
}

export interface LandingPermission {
    subserviceId: number;
    operatorName: string;
    stateOfRegistry: string;
    rating: number;
    ratingComment: string;
    manager: LandingPermissionManager;
    agent: LandingPermissionAgent;
    periodId: number;
    periodOfOperation: PeriodOfOperation;
    startDate: string;
    endDate: string;
    entryDate: string;
    natureOfOperationId: number;
    natureOfOperation: NatureOfOperation;
    aircraftRegistration: string;
    airportLandingId: number;
    airportLanding: AirportLanding;
    aircraftType: string;
    iATADesignator: string;
    iCAODesignator: string;
    pAXDetails: string;
    cargoDetails: string;
    restrictedItemsDetails: string;
    remarks: string;
    attachments: LandingPermissionAttachment[];
    trips: LandingPermissionTrip[];
    userProfileId: number;
    enteredBy: UserProfile;
    translations: LandingPermissionTranslation[];
}

export interface LandingPermissionTrip {
    tripId: number;
    flightId: string;
    fromDate: string;
    toDate: string;
    days: string;
    aircraftType: string;
    mTOW: number;
    route: string;
    tripRoute: Route;
    eTD: string;
    dubaiETA: string;
    dubaiETD: string;
    eTA: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
}

export interface LandingPermissionAttachment {
    id: number;
    documents: string;
    attachmentType: AttachmentType;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    subserviceId: number;
    landingPermission: LandingPermission;
}

export interface LandingPermissionManager {
    managerId: number;
    managerName: string;
    managerDesignation: string;
    managerEmail: string;
    managerMobile: string;
    managerPhone: string;
    address: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
}

export interface LandingPermissionAgent {
    agentId: number;
    agentName: string;
    agentEmail: string;
    agentContactNumber: string;
    address: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
}

export interface LandingPermissionTranslation {
    translationId: number;
    name: string;
    language: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    subserviceId: number;
    subService: LandingPermission;
}