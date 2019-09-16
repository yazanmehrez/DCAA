import {Component, Input, OnInit} from '@angular/core';
import {fadeInOut} from '../../../../animations/fadeInOut';

@Component({
  selector: 'dcaa-xgallery',
  templateUrl: './xgallery.component.html',
  styleUrls: ['./xgallery.component.scss'],
  animations: [fadeInOut]
})

export class XgalleryComponent implements OnInit {
  @Input() imageUrls: any;
  index;
  lastIndex;

  constructor() {
  }

  next() {
    this.index = this.index + 1;
  }

  prev() {
    this.index = this.index - 1;
  }

  ngOnInit() {
    this.index = 0;
    this.lastIndex = this.imageUrls.length - 1;
  }

}
