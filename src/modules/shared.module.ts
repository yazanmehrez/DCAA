import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material';
import {MatCarouselModule} from '../lib/material-carousel';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatCardModule,
        MatCarouselModule
    ],
    exports: [MatCarouselModule]
})
export class SharedModule {
}
