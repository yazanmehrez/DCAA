import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'dcaa-starting',
    templateUrl: './starting.component.html',
    styleUrls: ['./starting.component.scss']
})
export class StartingComponent implements OnInit {
    slides = [{image: 'assets/images/SLIDER MAIN.png', description: '<h1>50 YEARS <span class="white-color">OF ACHIEVEMENTS</span></h1>'},
        {image: 'assets/images/SLIDER MAIN.png',  description: '<h1>50 YEARS <span class="white-color">OF ACHIEVEMENTS</span></h1>'},
        {image: 'assets/images/SLIDER MAIN.png',  description: '<h1>50 YEARS <span class="white-color">OF ACHIEVEMENTS</span></h1>'}];

    constructor() {
    }

    ngOnInit() {
    }

}
