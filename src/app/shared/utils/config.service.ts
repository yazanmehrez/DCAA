import { Injectable } from '@angular/core';
@Injectable()
export class ConfigService {

    // tslint:disable-next-line:variable-name
    _apiURI: string;

    constructor() {
        this._apiURI = 'https://172.24.155.60';
    }

    getApiURI() {
        return this._apiURI;
    }

    getIpInfoToken(): string {
        return '0a1ffe58dfae60';
    }
}
