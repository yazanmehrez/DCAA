import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {rootRouterConfig} from './app.routes';
import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './views/home/home.component';
import {HeaderComponent} from './views/header/header.component';
import {FooterComponent} from './views/footer/footer.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import {DialogModule} from '../modules/dialog.module';
import {SharedModule} from '../modules/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StartingComponent} from './views/home/starting/starting.component';
import {NavbarComponent} from './views/header/navbar/navbar.component';
import {LatestNewsComponent} from './views/home/latest-news/latest-news.component';
import {ServicesComponent} from './views/home/services/services.component';
import {BuildingConstructionComponent} from './views/home/building-construction/building-construction.component';
import {MoreAboutDcaaComponent} from './views/home/more-about-dcaa/more-about-dcaa.component';
import {TrustedByComponent} from './views/home/trusted-by/trusted-by.component';
import {PartnersComponent} from './views/home/partners/partners.component';
import {XgalleryComponent} from './views/footer/xgallery/xgallery.component';
// import {NavbarResponsiveComponent} from '../lib/navbar/navbar.component';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new MultiTranslateHttpLoader(httpClient, [
    {prefix: './assets/i18n/', suffix: '.json'}
  ]);
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DialogModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
    }),
    RouterModule.forRoot(rootRouterConfig, {useHash: true})
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    StartingComponent,
    NavbarComponent,
    LatestNewsComponent,
    ServicesComponent,
    BuildingConstructionComponent,
    MoreAboutDcaaComponent,
    TrustedByComponent,
    PartnersComponent,
    XgalleryComponent,
    // NavbarResponsiveComponent
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {
}
