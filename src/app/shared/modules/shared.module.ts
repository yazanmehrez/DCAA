import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from 'src/app/components/file-uploader/file-uploader.component';
import { HelperPipe } from 'src/app/shared/utils/helper.pipe';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ImgCompComponent } from 'src/app/components/img-comp/img-comp.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxGalleryModule } from 'ngx-gallery';
import { ChartComponent } from 'src/app/components/chart/chart.component';

import { MatOptionModule, MatNativeDateModule, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';


import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as cylinder from 'highcharts/modules/cylinder.src';
import * as exporting from 'highcharts/modules/exporting.src';
import * as highchart3D from 'highcharts/highcharts-3d.src';
import * as drilldown from 'highcharts/modules/drilldown.src';
import { MomentDateAdapter, MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule, MatIconModule, MatInputModule, MatSlideToggleModule, MatSliderModule } from '@angular/material';
import { JwtModuleOptions, JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DatetimePipe } from 'src/app/pipes/datetime.pipe';


export function tokenGetter() {
  return localStorage.getItem('auth_token');
}


import {MatCardModule} from '@angular/material';
import {DropdownModule} from 'ngx-dropdown';
import {SWIPER_CONFIG, SwiperConfigInterface, SwiperModule} from 'ngx-swiper-wrapper';
import { MatCarouselModule } from 'src/lib/material-carousel/public_api';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};


// tslint:disable-next-line:variable-name
const JWT_Module_Options: JwtModuleOptions = {
  config: {
      tokenGetter,
      whitelistedDomains: ['localhost'],
      blacklistedRoutes: ['example.com/examplebadroute/']
  }
};





// Social Login
import { SocialLoginModule, AuthServiceConfig, LoginOpt } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

const fbLoginOptions: LoginOpt = {
  scope: 'email',
  return_scopes: true,
  enable_profile_selector: true
}; // https://developers.facebook.com/docs/reference/javascript/FB.login/v2.11
const googleLoginOptions: LoginOpt = {
  scope: 'profile email'
}; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('529747224406-ksa4745b1q6c3q1f6lbas5h2h94ekaqb.apps.googleusercontent.com', googleLoginOptions)
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('357743991778711', fbLoginOptions)
  }
]);
export function provideConfig() {
  return config;
}



@NgModule({
  declarations: [FileUploaderComponent, ImgCompComponent, ChartComponent, HelperPipe, DatetimePipe],
  imports: [
    CommonModule, SweetAlert2Module, DragDropModule, JwtModule.forRoot(JWT_Module_Options),
    NgxGalleryModule, ChartModule, MatOptionModule, MatNativeDateModule, FormsModule, ReactiveFormsModule, NgbDropdownModule,
    MatDatepickerModule, MatMomentDateModule, MatIconModule, MatInputModule, MatSlideToggleModule, MatSliderModule, NgbModule,
    MatAutocompleteModule, MatFormFieldModule, SocialLoginModule,
    MatCardModule,
    DropdownModule,
    SwiperModule
  ],
  exports: [FileUploaderComponent, ImgCompComponent, ChartComponent, HelperPipe, DatetimePipe, SwiperModule],
  providers: [
    AuthGuard,
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting, highchart3D, drilldown, cylinder ] },
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: {
      parse: {
        dateInput: 'LL',
      },
      display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
      },
    }
    },
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ]
})
export class MainSharedModule { }
