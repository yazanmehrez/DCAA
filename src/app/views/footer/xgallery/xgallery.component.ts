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
    if (this.index == (this.imageUrls.length - 1)) {
      this.index = 0;
    } else {
      this.index += 1;
    }
  }

  prev() {
    if (this.index == 0) {
      this.index = (this.imageUrls.length - 1);
    } else {
      this.index -= 1;
    }
  }

  ngOnInit() {
    this.index = 0;
    this.lastIndex = this.imageUrls.length - 1;
  }

}
