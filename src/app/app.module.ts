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
import {ReactiveFormsModule} from '@angular/forms';
import {StartingComponent} from './views/home/starting/starting.component';
import { NavbarComponent } from './views/header/navbar/navbar.component';
import { LatestNewsComponent } from './views/home/latest-news/latest-news.component';
import { ServicesComponent } from './views/home/services/services.component';
import { BuildingConstructionComponent } from './views/home/building-construction/building-construction.component';


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
    declarations: [AppComponent, HomeComponent, HeaderComponent, FooterComponent, StartingComponent, NavbarComponent, LatestNewsComponent, ServicesComponent, BuildingConstructionComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
