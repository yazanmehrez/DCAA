import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/shared/utils/config.service';
import { BaseService } from 'src/app/shared/services/base.service';
import { UserProfile } from 'src/app/shared/models/userProfile';


@Injectable({
  providedIn: 'root'
})
export class AccountServiceService extends BaseService {
  baseUrl = '';
  progressCount = 0;
  constructor(public configService: ConfigService, public httpClient: HttpClient, private ngZone: NgZone) {
    super(httpClient);

    this.baseUrl = configService.getApiURI();

    this.currentProgress.subscribe((progress: string) => {
      this.ngZone.run(() => {
        this.progressCount = Number(progress);
      });
    });
  }

  fetchLocales() {
    return this.restRequest(null, `${this.baseUrl}/api/LocaleInfoes`, null, 'GET');
  }

  fetchUserProfile() {
    return this.restRequest(null, `${this.baseUrl}/api/MyProfile`, null, 'GET');
  }

  editProfile(model: UserProfile, type: string = 'PUT') {
    return this.restRequest(model, `${this.baseUrl}/api/MyProfile/${model.id}`, null, type);
  }


}
