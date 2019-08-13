import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient, private router: Router, private auth: AuthenticationService) {
    }

    getGenericPage(functionName, data) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json')
            .set('Accept-Language', 'en')
            .set('Platform', '1')
            .set('Os-Version', '1')
            .set('Mobile-Brand', '1')
            .set('App-Version', '1');

        return this.http.post<any>('/src/api/user/' + functionName, data,
            {
                headers: headers
            }).pipe(map(res => {
            if (res.code === -401) {
                localStorage.removeItem('currentUser');
                this.auth.currentUserSubject.next(null);
                this.router.navigate(['login']);
            } else {
                return res;
            }
        }));
    }
}
