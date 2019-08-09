import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SlideshowModule} from 'ng-simple-slideshow';
import {SwiperModule} from 'ngx-swiper-wrapper';
import {NgProgressModule} from '@ngx-progressbar/core';
import {NgProgressHttpModule} from '@ngx-progressbar/http';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        SlideshowModule,
        SwiperModule,
        NgProgressModule.withConfig({
            spinner: false,
            color: '#000'
        }),
        NgProgressHttpModule
    ]
})
export class SharedModule {
}
