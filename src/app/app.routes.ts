import {Routes} from '@angular/router';
import {HomeComponent} from './views/home/home.component';

export const rootRouterConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        data: {
            title: '_Title'
        }
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

