import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dcaa-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {
  @Input() NavListData;

  constructor() { }

  ngOnInit() {
  }

}
