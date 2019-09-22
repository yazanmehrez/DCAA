import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dcaa-service-categories',
  templateUrl: './service-categories.component.html',
  styleUrls: ['./service-categories.component.scss']
})
export class ServiceCategoriesComponent implements OnInit {
  @Input() categories;

  constructor() {
  }

  ngOnInit() {
  }

}
