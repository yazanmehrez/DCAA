import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'dcaa-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss']
})
export class DisclaimerComponent implements OnInit {
  title = 'Disclaimer';
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
