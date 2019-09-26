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
      {path: 'overview', component: OverviewComponent}
    ],
    data: {
      title: '_AboutUs'
    }
  },
  {
    path: 'account', component: AccountRootComponent, canActivate: [AuthGuard],
    children: [
      {path: 'profile', component: UserProfileComponent},
      {path: 'changepassword', component: ChangePasswordComponent},
      {path: 'changeemail', component: ChangeEmailComponent},
    ]
  },
  {
    path: '**',
    component: HomeComponent
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


