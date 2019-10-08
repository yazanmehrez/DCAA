import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dcaa-text-pages',
  templateUrl: './text-pages.component.html',
  styleUrls: ['./text-pages.component.scss']
})
export class TextPagesComponent implements OnInit {
  @Input() content;
  @Input() title;
  @Input() route;

  constructor() {
  }

  ngOnInit() {
  }

}
