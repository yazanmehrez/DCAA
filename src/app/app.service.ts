import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject} from 'rxjs';
import * as AOS from 'aos';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public language = new BehaviorSubject<string>(null);
    currentLanguage: string;

    constructor(private translate: TranslateService) {

        /** Language Configurations **/
        if (!localStorage.getItem('language')) {
            localStorage.setItem('language', 'en');
        }
        const browserLang = localStorage.getItem('language');
        translate.setDefaultLang(browserLang.match(/en|ar/) ? browserLang : 'en');
        this.language.next(browserLang);

        /** Animations Trigger **/
        AOS.init({
            disable: window.outerWidth < 376,
            useClassNames: window.outerWidth > 375
        });
    }

    /* Switch Language */
    switchLanguage(language: string) {
        localStorage.setItem('language', language);
        this.language.next(language);
        this.translate.use(language);
    }
}

