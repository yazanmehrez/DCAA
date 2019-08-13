import {Routes} from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {LoginComponent} from './views/login/login.component';
import {AuthGuard} from '../guards/auth.guard';
import {OffersComponent} from './views/offers/offers.component';
import {MemberGuard} from '../guards/member.guard';

export const rootRouterConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        data: {
            title: '_Title'
        }
    },
    {
        path: 'offers',
        component: OffersComponent,
        canActivate: [AuthGuard],
        data: {
            title: '_Title'
        }
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [MemberGuard],
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

