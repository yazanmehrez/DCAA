import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../shared/services/user.service';
import {AccountServiceService} from '../../account-service.service';
import {CustomValidation} from '../../../../shared/utils/customValidator';

@Component({
  selector: 'dcaa-register-aircraft',
  templateUrl: './register-aircraft.component.html',
  styleUrls: ['./register-aircraft.component.scss']
})
export class RegisterAircraftComponent implements OnInit {
  airCraftForm: FormGroup;
  formSubmitted = false;
  formErrors = {};
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

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private restService: AccountServiceService) {
  }

  prepareForm() {
    this.airCraftForm = this.fb.group({
      airlineName: ['', Validators.required],
      airCraftSerialNumer: ['', Validators.required],
      airCraftManufacturer: ['', Validators.required],
      airCraftRegistration: ['', Validators.required],
      manufacturerDesignationType: ['', Validators.required],
      nationalityResgistrationMark: ['', Validators.required],
      airworthinessCertificateReference: ['', Validators.required],
      airworthinessCertificateExpiry: ['', Validators.compose([CustomValidation.validDate])],
      insurancePolicyNumber: ['', Validators.required],
      insurancePolicyExpiry: ['', Validators.compose([CustomValidation.validDate])],
      engine: ['', Validators.required],
      noiseCertificationStandard: ['', Validators.required],
      companyDetailsID: ['', Validators.required],
      companyDetails: ['', Validators.required],
      entryDate: ['', Validators.required],
      userProfileId: ['', Validators.required],
      MTOW: ['', Validators.required],
      enteredBy: ['', Validators.required]
    });
  }

  get p() {
    return this.airCraftForm.controls;
  }

  onSubmit() {
    this.formSubmitted = true;
  }

  ngOnInit() {
    this.prepareForm();
  }
}
