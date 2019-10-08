import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/shared/utils/config.service';
import { BaseService } from 'src/app/shared/services/base.service';
import { NewsletterSubscribe} from '../models/main';


@Injectable({
  providedIn: 'root'
})
export class MainRestService extends BaseService {
  baseUrl = '';
  progressCount = 0;
  constructor(public configService: ConfigService, public httpClient: HttpClient, private ngZone: NgZone) {
    super(httpClient, configService);

    this.baseUrl = configService.getApiURI();

    this.currentProgress.subscribe((progress: string) => {
      this.ngZone.run(() => {
        this.progressCount = Number(progress);
      });
    });
  }


  // Locales

  SubscribeNewsletter(newsletterSubscribe: NewsletterSubscribe) {
    return this.restRequest(newsletterSubscribe, `${this.baseUrl}/api/NewsletterSubscribes`, null, 'POST');
  }

  fetchLocales() {
    return this.restRequest(null, `${this.baseUrl}/api/LocaleInfoes`, null, 'GET');
  }

  fetchLocale(city: string) {
    return this.restRequest(null, `${this.baseUrl}/api/GetLocaleInfoByCity?city=${city}`, null, 'GET');
  }


  globalSearch(searchString: string, type: string = 'POST') {
    return this.restRequest(searchString, `${this.baseUrl}/api/GlobalSearch`, null, type);
  }


  MyProfile() {
    return this.restRequest(null, `${this.baseUrl}/api/MyProfile`, null, 'GET');
  }

  IsEmailVerifiedAsync(sendConfirmation = false) {
    return this.restRequest(null, `${this.baseUrl}/api/IsMyEmailVerified/?sendConfirmation=${sendConfirmation}`, null, 'GET');
  }

}
