import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../classes/user';


@Injectable({providedIn: 'root'})
export class AuthenticationService {
    public currentUser: Observable<User>;
    public currentUserSubject: BehaviorSubject<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json')
            .set('Accept-Language', 'en')
            .set('Platform', '1')
            .set('Os-Version', '1')
            .set('Mobile-Brand', '1')
            .set('App-Version', '1');

        return this.http.post<any>('/src/api/user/login', {username, password},
            {
                headers: headers
            }).pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user.data.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
            return user;
        }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
