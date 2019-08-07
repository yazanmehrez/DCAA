import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';

@Component({
    selector: 'app-root',
    template: `
        <app-header></app-header>
        <router-outlet></router-outlet>
        <app-footer></app-footer>`
})
export class AppComponent implements OnInit {

    constructor(private _appService: AppService) {
    }

    ngOnInit() {
        this._appService.language.subscribe(language => {
            this._appService.currentLanguage = language === 'en' ? 'en' : 'ar';
            switch (language) {
                case ('en') :
                    document.documentElement.setAttribute('lang', 'en');
                    break;
                case ('ar') :
                    document.documentElement.setAttribute('lang', 'ar');
                    break;
            }
        });
    }

}
