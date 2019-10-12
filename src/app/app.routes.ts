import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {AccountRootComponent} from './views/Accounts/account-root/account-root.component';
import {AuthGuard} from './guards/auth.guard';
import {UserProfileComponent} from './views/Accounts/user-profile/user-profile.component';
import {ChangePasswordComponent} from './views/Accounts/change-password/change-password.component';
import {ChangeEmailComponent} from './views/Accounts/change-email/change-email.component';
import {AboutUsComponent} from './views/pages/about-us/about-us.component';
import {OverviewComponent} from './views/pages/about-us/overview/overview.component';
import {DcaaSectorsComponent} from './views/pages/about-us/dcaa-sectors/dcaa-sectors.component';
import {DcaaStrategiesComponent} from './views/pages/about-us/dcaa-strategies/dcaa-strategies.component';
import {OrganizationalStructureComponent} from './views/pages/about-us/organizational-structure/organizational-structure.component';
import {FaqComponent} from './views/pages/faq/faq.component';
import {FeedbackComponent} from './views/pages/feedback/feedback.component';
import {YourFeedbackComponent} from './views/pages/feedback/your-feedback/your-feedback.component';
import {ContactDgComponent} from './views/pages/feedback/contact-dg/contact-dg.component';
import {StatisticsComponent} from './views/pages/statistics/statistics.component';
import {IssuedPermitsComponent} from './views/pages/statistics/issued-permits/issued-permits.component';
import {InspectionsComponent} from './views/pages/statistics/inspections/inspections.component';
import {SafetyInspectionsComponent} from './views/pages/statistics/safety-inspections/safety-inspections.component';
import {DisclaimerComponent} from './views/pages/text-pages/disclaimer/disclaimer.component';
import {PrivacyPolicyComponent} from './views/pages/text-pages/privacy-policy/privacy-policy.component';
import {TextPagesComponent} from './views/pages/text-pages/text-pages.component';
import {TokenResetComponent} from './views/pages/token-reset/token-reset.component';
import {NatureOfBusinessComponent} from './views/Accounts/nature-of-business/nature-of-business.component';
import {ViewRegisterAircraftComponent} from './views/Accounts/view-register-aircraft/view-register-aircraft.component';
import {CompanyAssociationComponent} from './views/Accounts/company-association/company-association.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: '_Title'
    }
  },
  {
    path: 'about',
    component: AboutUsComponent,
    children: [
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'overview', component: OverviewComponent},
      {path: 'sectors', component: DcaaSectorsComponent},
      {path: 'strategies', component: DcaaStrategiesComponent},
      {path: 'organizational-structure', component: OrganizationalStructureComponent}
    ],
    data: {
      title: '_AboutUs'
    }
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
    children: [
      {path: '', redirectTo: 'issued-permits', pathMatch: 'full'},
      {path: 'issued-permits', component: IssuedPermitsComponent},
      {path: 'inspections', component: InspectionsComponent},
      {path: 'safety-inspections', component: SafetyInspectionsComponent}
    ],
    data: {
      title: '_Statistics'
    }
  },
  {
    path: 'faq',
    component: FaqComponent,
    data: {
      title: '_FAQ'
    }
  },
  {path: 'token/:resetType/:userName/:resettoken', component: TokenResetComponent},
  {
    path: 'dcaa',
    component: TextPagesComponent,
    children: [
      {path: '', redirectTo: 'privacy-policy', pathMatch: 'full'},
      {
        path: 'disclaimer', component: DisclaimerComponent, data: {
          title: '_Disclaimer'
        }
      },
      {
        path: 'privacy-policy', component: PrivacyPolicyComponent, data: {
          title: '_PrivacyPolicy'
        }
      },
    ],
    data: {
      title: '_TextPages'
    }
  },


  {
    path: 'feedback',
    component: FeedbackComponent,
    children: [
      {path: '', component: YourFeedbackComponent},
      {path: 'contact-DG', component: ContactDgComponent}
    ],
    data: {
      title: '_Feedback'
    }
  },
  {
    path: 'account', component: AccountRootComponent, canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'profile', pathMatch: 'full'},
      {path: 'profile', component: UserProfileComponent},
      {path: 'change-password', component: ChangePasswordComponent},
      {path: 'change-email', component: ChangeEmailComponent},
      {path: 'company-association', component: CompanyAssociationComponent},
      {path: 'view-register-aircraft', component: ViewRegisterAircraftComponent},
      {path: 'nature-of-business', component: NatureOfBusinessComponent},
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


