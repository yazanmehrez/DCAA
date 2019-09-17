import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material';
import {MatCarouselModule} from '../lib/material-carousel';
import {DropdownModule} from 'ngx-dropdown';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {SlickCarouselModule} from 'ngx-slick-carousel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatCarouselModule,
    AngularSvgIconModule,
    DropdownModule,
    SlickCarouselModule
  ],
  exports: [MatCarouselModule, AngularSvgIconModule, SlickCarouselModule]
})
export class SharedModule {
}
