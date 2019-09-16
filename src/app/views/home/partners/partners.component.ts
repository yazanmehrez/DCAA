import {AfterViewInit, Component} from '@angular/core';
import {tns} from 'tiny-slider/src/tiny-slider';

@Component({
    selector: 'dcaa-partners',
    templateUrl: './partners.component.html',
    styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements AfterViewInit {

    partners = [
        'assets/images/partners/al ameen.png',
        'assets/images/partners/ask.png',
        'assets/images/partners/complain.png',
        'assets/images/partners/dubai career.png',
        'assets/images/partners/e-suggest-logo.png',
        'assets/images/partners/expo 2020.png',
        'assets/images/partners/gov ae.png',
        'assets/images/partners/mmrz.png',
        'assets/images/partners/smart dubai.png',
    ];

    constructor() {
    }

    ngAfterViewInit() {
        tns({
            container: '.partners',
            items: 7,
            mode: 'carousel',
            controls: false,
            slideBy: 1,
            controlsContainer: false,
            nav: false,
            mouseDrag: true,
            autoplayButtonOutput: false,
            autoplay: true,
            loop: false,
            rewind: true
        });

        const live_pagination = document.getElementsByClassName('tns-liveregion');
        live_pagination[0].remove();
    }

}
