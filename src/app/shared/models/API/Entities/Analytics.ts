import { UserProfile } from './UserProfile';

import { ChartResult } from '../../chart';

export interface UserAnalytic {
    registrationAnalyticId: number;
    userProfileId: number;
    identityId: string;
    entryDate: string;
}

export interface LoginAnalytic {
    loginAnalyticId: number;
    browser: string;
    ip: string;
    city: string;
    region: string;
    region_code: string;
    country: string;
    country_name: string;
    continent_code: string;
    in_eu: string;
    postal: string;
    latitude: string;
    longitude: string;
    latlong: string;
    timezone: string;
    utc_offset: string;
    languages: string;
    country_calling_code: string;
    currency: string;
    asn: string;
    org: string;
    entryDate: string;
    userProfileId: number;
    userProfile: UserProfile;
}

export interface LoginAnalyticWithChart {
    loginAnalytics: LoginAnalytic[];
    chartResult: ChartResult;
}

export interface LoginAnalyticExtended {
    loginAnalytic: LoginAnalytic;
    userName: string;
    firstName: string;
    lastName: string;
    pictureUrl: string;
}

export interface UserAnalyticWithChart {
    userAnalytics: UserAnalytic[];
    chartResult: ChartResult;
}