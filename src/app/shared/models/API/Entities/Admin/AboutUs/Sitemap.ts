import { UserProfile } from '../../UserProfile';

export enum SubCategory {
    NoSubcategory = 0,
    AirTransportServices = 1,
    DangerousGoodsServices = 2,
    AviationAndAirportsSafetyServices = 3,
    AirspaceSafeguardingServices = 4,
    ProcurementandContracts = 5
}

export interface SiteMapCategories {
    categoryId: number;
    translations: SiteMapCategoryTranslation[];
    siteMaps: SiteMap[];
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
}

export interface SiteMapCategoryTranslation {
    categoryTranslationId: number;
    category: string;
    subCategory: SubCategory;
    language: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    categoryId: number;
    siteMapCategories: SiteMapCategories;
}

export interface SiteMap {
    siteMapId: number;
    url: string;
    translations: SiteMapTranslation[];
    categoryId: number;
    siteMapCategories: SiteMapCategories;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
}

export interface SiteMapTranslation {
    siteMapTranslationId: number;
    title: string;
    language: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
    siteMapId: number;
    siteMap: SiteMap;
}