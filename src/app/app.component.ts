import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'dcaa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public _appService: AppService,
              private translate: TranslateService,
              private titleService: Title) {
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

      this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
        this.translate.get('_Title').subscribe((res: string) => {
          this.titleService.setTitle(res);
        });
      });
      this.translate.onDefaultLangChange.subscribe((event: LangChangeEvent) => {
        this.translate.get('_Title').subscribe((res: string) => {
          this.titleService.setTitle(res);
        });
      });
    });
  }

}
