import { QuickLink } from '../../QuickLink';
import { ContactInfoData } from './ContactInfoData';
import { DCAAInformation } from './DCAAInformation';
import { DCAAReviews } from './DCAAReviews';
import { AppsandAdvertisements } from './FooterLinks';
import { LatestNews } from './LatestNews';
import { PartnerSiteLinks } from './PartnerSiteLinks';
import { SocialMediaLinks } from './SocialMediaLinks';


export interface FooterData {
    appsandAdvertisements: AppsandAdvertisements[];
    quickLink: QuickLink[];
    socialMediaLinks: SocialMediaLinks[];
    partnerSiteLinks: PartnerSiteLinks[];
    contactInfoData: ContactInfoData[];
}

export interface HomeData {
    dCAAInformation: DCAAInformation[];
    dCAAReviews: DCAAReviews[];
    latestNews: LatestNews[];
}