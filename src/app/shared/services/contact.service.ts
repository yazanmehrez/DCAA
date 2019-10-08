import {Injectable} from '@angular/core';
import {ContactFeedback} from '../models/contact.feedback';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from '../utils/config.service';
import {BaseService} from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends BaseService {
  baseUrl = this.configService.getApiURI();

  constructor(public httpClient: HttpClient, public configService: ConfigService) {
    super(httpClient, configService);
  }


  submitContactFeedback(model: ContactFeedback, type: string = 'POST') {
    return this.restRequest(model, `${this.baseUrl}/api/ContactFeedback`, null, type);
  }

  getAllContactFeedback(type: string = 'GET') {
    return this.restRequest(null, `${this.baseUrl}/api/ContactFeedback`, null, type);
  }

  getContactFeedback(id: number, type: string = 'GET') {
    return this.restRequest(null, `${this.baseUrl}/api/ContactFeedback?id=${id}`, null, type);
  }
}

