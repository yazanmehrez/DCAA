import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    cards = [
        {
            image: '/assets/images/c1.png',
            title: 'Lorem ipsum dolor sit amet.',
            description: 'Suspendisse vel leo efficitur, <br> venenatis est ut tincidunt nibh.'
        },
        {
            image: '/assets/images/c2.png',
            title: 'Lorem ipsum dolor sit amet.',
            description: 'Suspendisse vel leo efficitur, <br> venenatis est ut tincidunt nibh.'
        },
        {
            image: '/assets/images/c3.png',
            title: 'Lorem ipsum dolor sit amet.',
            description: 'Suspendisse vel leo efficitur, <br> venenatis est ut tincidunt nibh.'
        },
        {
            image: '/assets/images/c4.png',
            title: 'Lorem ipsum dolor sit amet.',
            description: 'Suspendisse vel leo efficitur, venenatis est ut tincidunt nibh.'
        }
    ];
    imageCross = [
        {
            image: '/assets/images/ic1.png',
            title: 'Lorem ipsum dolor',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit., <br> Suspendisse vel leo efficitur, venenatis est ut, tincidunt nibh. <br> Suspendisse lobortis lectus vel imperdiet ullamcorper.'
        },
        {
            image: '/assets/images/ic2.png',
            title: 'Lorem ipsum dolor',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit., <br> Suspendisse vel leo efficitur, venenatis est ut, tincidunt nibh. <br> Suspendisse lobortis lectus vel imperdiet ullamcorper.'
        }
    ];
    application = [
        {
            image: '/assets/images/app1.png',
            title: 'Lorem ipsum dolor',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit., <br> Suspendisse vel leo efficitur, venenatis est ut, tincidunt nibh. <br> Suspendisse lobortis lectus vel imperdiet ullamcorper.'
        },
        {
            image: '/assets/images/app2.png',
            title: 'Lorem ipsum dolor',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit., <br> Suspendisse vel leo efficitur, venenatis est ut, tincidunt nibh. <br> Suspendisse lobortis lectus vel imperdiet ullamcorper.'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
