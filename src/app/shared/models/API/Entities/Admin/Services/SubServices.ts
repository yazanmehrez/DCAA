import { UserProfile } from '../../UserProfile';
import { Services } from './Services';
import { NatureOfBusiness } from '../../CompanyDetails';
import{ApproverPersonnel} from 'C:/DCAA-Website/FrontEnd/DCAAWebsite/src/app/shared/models/API/Entities/Admin/Services/ApproverPersonnel';


export interface SubServices {
    subServiceId: number;
    icon: string;
    link: string;
    isDeleted:boolean;
    translations: SubServiceTranslation[];
    subServiceInformation: SubServiceInformation[];
    subServicePricing: SubServicePricing[];
    natureOfBusiness:NatureOfBusiness[];
    approverPersonnel:ApproverPersonnel[];
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    serviceId: number;
    services: Services;
}

export interface SubServiceTranslation {
    translationId: number;
    title: string;
    description: string;
    language: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    subServiceId: number;
    subServices: SubServices;
}

export interface SubServiceInformation {
    informationId: number;
    translations: SubServiceInformationTranslation[];
    icon: string;
    language: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    subServiceId: number;
    subServices: SubServices;
}

export interface SubServiceInformationTranslation {
    translationId: number;
    title: string;
    contentHTML: string;
    language: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    informationId: number;
    subServiceInformation: SubServiceInformation;
}

export interface SubServicePricing {
    pricingId: number;
    translation: SubServicePricingTranslation[];
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    subServiceId: number;
    subServices: SubServices;
}

export interface SubServicePricingTranslation {
    translationId: number;
    value: number;
    item: string;
    language: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    pricingId: number;
    subServicePricing: SubServicePricing;
}