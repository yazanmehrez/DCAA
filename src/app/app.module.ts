import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {rootRouterConfig} from './app.routes';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './views/home/home.component';
import {HeaderComponent} from './views/header/header.component';
import {FooterComponent} from './views/footer/footer.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import {DialogModule} from '../modules/dialog.module';
import {SharedModule} from '../modules/shared.module';
import {LoginComponent} from './views/login/login.component';
import {JwtInterceptor} from '../helpers/jwt.interceptor';
import {ErrorInterceptor} from '../helpers/error.interceptor';
import {fakeBackendProvider} from '../helpers/fake-backend';
import {ReactiveFormsModule} from '@angular/forms';
import {OffersComponent} from './views/offers/offers.component';

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
    declarations: [AppComponent, HomeComponent, HeaderComponent, FooterComponent, LoginComponent, OffersComponent],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

        // provider used to create fake backend
        fakeBackendProvider],
    bootstrap: [AppComponent]
})
export class AppModule {
}
