import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';

@Component({
    selector: 'app-offers',
    templateUrl: './offers.component.html',
    styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

    constructor(private api: ApiService) {
    }

    getAllOffers() {
        this.api.getGenericPage('get_products', {page: 10, size: 10}).subscribe(response => {
            // console.log(response);
        });
    }

    ngOnInit() {
        this.getAllOffers();
    }

}
