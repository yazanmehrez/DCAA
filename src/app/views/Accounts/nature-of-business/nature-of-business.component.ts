import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../shared/services/user.service';
import {AccountServiceService} from '../account-service.service';
import {CustomValidation} from '../../../shared/utils/customValidator';

@Component({
  selector: 'dcaa-nature-of-business',
  templateUrl: './nature-of-business.component.html',
  styleUrls: ['./nature-of-business.component.scss']
})
export class NatureOfBusinessComponent implements OnInit {
  formSubmitted = false;
  inProgress = false;

  services = [
    {
      id: 10,
      layoutType: 1,
      description: 'Landing Permits',
      icon: 'Landing-Permits',
      categories: [[
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
      ], [
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
      ]]
    },
    {
      id: 1,
      layoutType: 1,
      description: 'Landing Permits',
      icon: 'Landing-Permits',
      categories: [[
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
      ], [
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
      ]]
    },
    {
      id: 2,
      layoutType: 1,
      description: 'Landing Permits',
      icon: 'Landing-Permits',
      categories: [[
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
      ], [
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
      ]]
    },
    {
      id: 3,
      layoutType: 1,
      description: 'Landing Permits',
      icon: 'Landing-Permits',
      categories: [[
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
      ], [
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
      ]]
    },
    {
      id: 4,
      layoutType: 1,
      description: 'Landing Permits',
      icon: 'Landing-Permits',
      categories: [[
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
      ], [
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
      ]]
    },
    {
      id: 5,
      layoutType: 1,
      description: 'Landing Permits',
      icon: 'Landing-Permits',
      categories: [[
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
      ], [
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
      ]]
    },
    {
      id: 6,
      layoutType: 1,
      description: 'Landing Permits',
      icon: 'Landing-Permits',
      categories: [[
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
      ], [
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 1,
          'icon': 'air-sports-event',
          'link': 'air-sports-event',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate',
              'description': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 1
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
      ]]
    },
  ];
  categories = [[], []];
  serviceSelected: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
