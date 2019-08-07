import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {rootRouterConfig} from './app.routes';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './views/home/home.component';
import {HeaderComponent} from './views/header/header.component';
import {FooterComponent} from './views/footer/footer.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(rootRouterConfig, {useHash: false})
    ],
    declarations: [AppComponent, HomeComponent, HeaderComponent, FooterComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
