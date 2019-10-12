import {AirTransportTranslation} from './Admin/Services/AirTransport';
import {
  AirportLanding,
  AirportLandingTranslation,
  Contact,
  ContactTranslation,
  LandingPermissionSetting,
  LandingPermissionSettingTranslation,
  NatureOfOperation,
  NatureOfOperationTranslation,
  PeriodOfOperation,
  PeriodOfOperationTranslation
} from './Admin/Services/Subservices/LandingPermissionSetting';
import {AppUser} from './AppUser';
import {
  LandingPermission,
  LandingPermissionAttachment,
  LandingPermissionTranslation,
  LandingPermissionTrip
} from './User/Subservices/LandingPermission';
import {ContactDetails, IndividualDetails} from './UserProfileDetails';
import {AboutUs, AboutusTranslation} from './AboutUs';
import {ContactUsType, ContactUsTypeTranslation} from './Admin/AboutUs/ContactUsType';
import {DCAASector, DCAASectorTranslation} from './Admin/AboutUs/DCAASector';
import {DCAAStrategies, DCAAStrategiesTranslation} from './Admin/AboutUs/DCAAStrategies';
import {FAQ, FAQSection, FAQSectionTranslation, FAQTranslation} from './Admin/AboutUs/FAQ';
import {OurStory, OurStoryTranslation} from './Admin/AboutUs/OurStory';
import {SiteMap, SiteMapCategories, SiteMapCategoryTranslation, SiteMapTranslation} from './Admin/AboutUs/Sitemap';
import {SocialMediaLinks} from './Admin/AboutUs/SocialMediaLinks';
import {AppsandAdvertisements, AppsandAdvertisementTranslation} from './Admin/AboutUs/FooterLinks';
import {QuickLink, QuickLinkContent} from './QuickLink';
import {LatestNews, LatestNewsTranslation} from './Admin/AboutUs/LatestNews';
import {DCAAInformation, DCAAInformationTranslation} from './Admin/AboutUs/DCAAInformation';
import {DCAAReviews, DCAAReviewsTranslation} from './Admin/AboutUs/DCAAReviews';
import {HMFeedback} from './User/HMFeedback';
import {ContactFeedback} from '../../contact.feedback';
import {Services, ServiceTranslation} from './Admin/AboutUs/Services';
import {
  SubServiceInformation,
  SubServiceInformationTranslation,
  SubServicePricing,
  SubServicePricingTranslation,
  SubServices,
  SubServiceTranslation
} from './Admin/AboutUs/SubServices';
import {DCAAHeader} from './Admin/AboutUs/DCAAHeader';
import {ContactInfoData, ContactInfoTranslation} from './Admin/AboutUs/ContactInfoData';
import {Session} from 'protractor';
import {Chatter} from './Admin/AboutUs/Session';
import {CompanyDetails, CompanyDetailsUserProfile} from './CompanyDetails';
import {LocaleInfo} from './Admin/LocaleInfo';
import {AccountType} from '../Enums/AccountEnums';

export interface UserProfile {
  id: number;
  identityId: string;
  identity: AppUser;
  firstName: string;
  pictureUrl: string;
  lastName: string;
  gender: string;
  dOB?: string;
  entryDate: string;
  accountType: AccountType;

  connectionId: string;
  localeId?: number;
  locale: LocaleInfo;
  airTransportTranslations: AirTransportTranslation[];
  landingPermissionTranslations: LandingPermissionTranslation[];
  landingPermissionSettingTranslations: LandingPermissionSettingTranslation[];
  landingPermissionSettings: LandingPermissionSetting[];
  landingPermissions: LandingPermission[];
  landingPermissionTrips: LandingPermissionTrip[];
  landingPermissionAttachments: LandingPermissionAttachment[];
  airportLandings: AirportLanding[];
  airportLandingTranslations: AirportLandingTranslation[];
  natureOfOperations: NatureOfOperation[];
  natureOfOperationTranslations: NatureOfOperationTranslation[];
  periodOfOperations: PeriodOfOperation[];
  periodOfOperationTranslations: PeriodOfOperationTranslation[];
  contacts: Contact[];
  contactTranslations: ContactTranslation[];
  aboutUs: AboutUs[];
  aboutusTranslation: AboutusTranslation[];
  contactUsType: ContactUsType[];
  contactUsTypeTranslation: ContactUsTypeTranslation[];
  dCAASector: DCAASector[];
  dCAASectorTranslation: DCAASectorTranslation[];
  dCAAStrategies: DCAAStrategies[];
  dCAAStrategiesTranslation: DCAAStrategiesTranslation[];
  fAQSection: FAQSection[];
  fAQSectionTranslation: FAQSectionTranslation[];
  fAQ: FAQ[];
  fAQTranslation: FAQTranslation[];
  ourStory: OurStory[];
  ourStoryTranslation: OurStoryTranslation[];
  siteMap: SiteMap[];
  siteMapTranslation: SiteMapTranslation[];
  siteMapCategories: SiteMapCategories[];
  siteMapCategoryTranslation: SiteMapCategoryTranslation[];
  socialMediaLinks: SocialMediaLinks[];
  appsandAdvertisements: AppsandAdvertisements[];
  appsandAdvertisementTranslation: AppsandAdvertisementTranslation[];
  quickLink: QuickLink[];
  quickLinkContent: QuickLinkContent[];
  latestNews: LatestNews[];
  latestNewsTranslation: LatestNewsTranslation[];
  dCAAInformation: DCAAInformation[];
  dCAAInformationTranslation: DCAAInformationTranslation[];
  dCAAReviews: DCAAReviews[];
  dCAAReviewsTranslation: DCAAReviewsTranslation[];
  hMFeedback: HMFeedback[];
  contactFeedback: ContactFeedback[];
  services: Services[];
  subServices: SubServices[];
  serviceTranslation: ServiceTranslation[];
  subServiceTranslation: SubServiceTranslation[];
  dCAAHeader: DCAAHeader[];
  contactInfoData: ContactInfoData[];
  contactInfoTranslation: ContactInfoTranslation[];
  subServiceInformation: SubServiceInformation[];
  subServiceInformationTranslation: SubServiceInformationTranslation[];
  subServicePricing: SubServicePricing[];
  subServicePricingTranslation: SubServicePricingTranslation[];
  sessions: Session[];
  chatters: Chatter[];
  companyDetails: CompanyDetails;
  companyDetailsUserProfile: CompanyDetailsUserProfile[];
  contactDetails: ContactDetails[];
  individualDetails: IndividualDetails;
}
