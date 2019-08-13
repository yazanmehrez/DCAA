import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to api url
        if (!request.url.startsWith('/src/api/user/login') && !request.url.startsWith('./assets/i18n/')) {
            const currentUser = this.authenticationService.currentUserValue;
            const isLoggedIn = currentUser.data && currentUser.data.token;
            const isApiUrl = request.url.startsWith('/src/api/');
            if (isLoggedIn && isApiUrl) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${currentUser.data.token}`
                    }
                });
            }
        }
        return next.handle(request);
    }
}
