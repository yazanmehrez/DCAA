import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TransporterService {
    private messageSource = new BehaviorSubject<any>(null);
    // Observable navItem stream
    message = this.messageSource.asObservable();

    constructor() {

    }

    sendMessage(data: {type: string, data: any}) {
        this.messageSource.next(data);
    }
}
