import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NguCarousel} from '@ngu/carousel';

@Component({
    selector: 'dcaa-partners',
    templateUrl: './partners.component.html',
    styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements AfterViewInit, OnInit {

    partners = [
        'assets/images/footer/al ameen.png',
        'assets/images/footer/ask.png',
        'assets/images/footer/complain.png',
        'assets/images/footer/dubai career.png',
        'assets/images/footer/e-suggest-logo.png',
        'assets/images/footer/expo 2020.png',
        'assets/images/footer/gov ae.png',
        'assets/images/footer/mmrz.png',
        'assets/images/footer/smart dubai.png',
    ];
    public carouselOptions: NguCarousel;

    constructor() {
    }

    ngOnInit() {
        this.carouselOptions = {
            grid: {xs: 2, sm: 5, md: 8, lg: 9, all: 0},
            slide: 4,
            speed: 400,
            interval: 2000,
            point: {
                visible: false
            },
            load: 5,
            touch: true,
            loop: true
        };
    }

    ngAfterViewInit() {

    }
}
