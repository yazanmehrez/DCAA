import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'dcaa-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services = [
    {
      id: 0,
      layoutType: 1,
      description: 'Landing Permits',
      icon: 'Landing-Permits',
      categories: [[
        {
          'subServiceId': 1,
          'icon': 'test',
          'link': 'test',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
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
          'subServiceId': 3,
          'icon': 'test',
          'link': 'test',
          'translations': [
            {
              'translationId': 4,
              'title': 'Issuing No Objection Certificate For Aerial Work (RPAS)',
              'description': 'Issuing No Objection Certificate For Aerial Work (RPAS)',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 3
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 4,
          'icon': 'new',
          'link': 'new',
          'translations': [
            {
              'translationId': 10,
              'title': 'ssuing No Objection Certificate For Aerial Work (Helicopter/Fixed Wing Aircraft)',
              'description': 'ssuing No Objection Certificate For Aerial Work (Helicopter/Fixed Wing Aircraft)',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 4
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 5,
          'icon': null,
          'link': null,
          'translations': [
            {
              'translationId': 11,
              'title': 'test',
              'description': 'test',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 5
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 9,
          'icon': 'new1',
          'link': 'new1',
          'translations': [
            {
              'translationId': 13,
              'title': 'test2',
              'description': 'test2',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 9
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 10,
          'icon': null,
          'link': null,
          'translations': [
            {
              'translationId': 14,
              'title': 'test3',
              'description': 'test3',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 10
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        }
      ], [
        {
          'subServiceId': 1,
          'icon': 'test',
          'link': 'test',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
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
          'subServiceId': 3,
          'icon': 'test',
          'link': 'test',
          'translations': [
            {
              'translationId': 4,
              'title': 'Issuing No Objection Certificate For Aerial Work (RPAS)',
              'description': 'Issuing No Objection Certificate For Aerial Work (RPAS)',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 3
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 4,
          'icon': 'new',
          'link': 'new',
          'translations': [
            {
              'translationId': 10,
              'title': 'ssuing No Objection Certificate For Aerial Work (Helicopter/Fixed Wing Aircraft)',
              'description': 'ssuing No Objection Certificate For Aerial Work (Helicopter/Fixed Wing Aircraft)',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 4
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 5,
          'icon': null,
          'link': null,
          'translations': [
            {
              'translationId': 11,
              'title': 'test',
              'description': 'test',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 5
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 9,
          'icon': 'new1',
          'link': 'new1',
          'translations': [
            {
              'translationId': 13,
              'title': 'test2',
              'description': 'test2',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 9
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 10,
          'icon': null,
          'link': null,
          'translations': [
            {
              'translationId': 14,
              'title': 'test3',
              'description': 'test3',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 10
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        }
      ]]
    },
    {
      id: 1,
      layoutType: 2,
      description: 'Issuance Permits for Aviation Safety Operations',
      icon: 'Aviation-Safety-Operations',
      categories: [[
        {
          'subServiceId': 1,
          'icon': 'test',
          'link': 'test',
          'translations': [
            {
              'translationId': 1,
              'title': 'Issuing No Objection Certificate For Sky Trackers / Space Cannon',
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
          'subServiceId': 3,
          'icon': 'test',
          'link': 'test',
          'translations': [
            {
              'translationId': 4,
              'title': 'Issuing No Objection Certificate For Aerial Work (RPAS)',
              'description': 'Issuing No Objection Certificate For Aerial Work (RPAS)',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 3
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 4,
          'icon': 'new',
          'link': 'new',
          'translations': [
            {
              'translationId': 10,
              'title': 'ssuing No Objection Certificate For Aerial Work (Helicopter/Fixed Wing Aircraft)',
              'description': 'ssuing No Objection Certificate For Aerial Work (Helicopter/Fixed Wing Aircraft)',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 4
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 5,
          'icon': null,
          'link': null,
          'translations': [
            {
              'translationId': 11,
              'title': 'test',
              'description': 'test',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 5
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 9,
          'icon': 'new1',
          'link': 'new1',
          'translations': [
            {
              'translationId': 13,
              'title': 'test2',
              'description': 'test2',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 9
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        },
        {
          'subServiceId': 10,
          'icon': null,
          'link': null,
          'translations': [
            {
              'translationId': 14,
              'title': 'test3',
              'description': 'test3',
              'language': 'English',
              'entryDate': '2019-09-24T00:00:00',
              'userProfileId': 1,
              'enteredBy': null,
              'subServiceId': 10
            }
          ],
          'entryDate': '2019-09-24T00:00:00',
          'userProfileId': 1,
          'enteredBy': null,
          'serviceId': 2,
          'services': null
        }
      ], []]
    },
    {
      id: 2,
      description: 'Issuance of No objection Certificate for Dangerous Goods and Fire Airs',
      icon: 'Dangerous-Goods',
      categories: [[], []]
    },
    {
      id: 3,
      description: 'Permits for Aviation-related Activities',
      icon: 'Aviation-related-Activities',
      categories: [[], []]
    },
    {
      id: 4,
      description: 'Building Constructions or Elevation Permits',
      icon: 'Building-Constructions',
      categories: [[], []]
    },
    {
      id: 5,
      description: 'Approving Landing Fields',
      icon: 'Approving-Landing-Fields',
      categories: [[], []]
    }
  ];
  categories = [[], []];
  serviceSelected;

  constructor() {
  }

  selectCategory(selectedCategory) {
    this.categories = selectedCategory.categories;
    this.serviceSelected = selectedCategory.id;

    window.scrollBy({
      top: 400,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit() {
  }

}
