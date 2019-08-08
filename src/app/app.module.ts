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
import { WelcomeComponent } from './modals/welcome/welcome.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new MultiTranslateHttpLoader(httpClient, [
        {prefix: './assets/i18n/', suffix: '.json'}
    ]);
}

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        DialogModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            },
        }),
        RouterModule.forRoot(rootRouterConfig, {useHash: true})
    ],
    declarations: [AppComponent, HomeComponent, HeaderComponent, FooterComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
