import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dcaa-page-banner',
  templateUrl: './page-banner.component.html',
  styleUrls: ['./page-banner.component.scss']
})
export class PageBannerComponent implements OnInit {
  @Input() Image: string;
  @Input() Title: string;
  @Input() Section: string;

  constructor() {
  }

  ngOnInit() {
  }

}
