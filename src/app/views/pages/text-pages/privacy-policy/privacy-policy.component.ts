import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'dcaa-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  title = 'Privacy Policy';
  content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur molestias nobis saepe!' +
    'Accusantium, consectetur doloribus iure mollitia repudiandae unde. Accusantium architecto doloribus,' +
    'Accusantium, consectetur doloribus iure mollitia repudiandae unde. Accusantium architecto doloribus,' +
    'Accusantium, consectetur doloribus iure mollitia repudiandae unde. Accusantium architecto doloribus,' +
    'Accusantium, consectetur doloribus iure mollitia repudiandae unde. Accusantium architecto doloribus,' +
    'ducimus facere odit optio quae quaerat. Placeat, possimus.';

  constructor() {
  }

  ngOnInit() {
  }

}
