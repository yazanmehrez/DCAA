import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivateChild} from '@angular/router';
import { JWTService } from '../shared/utils/JWTtoken.service';
import { TransporterService } from '../shared/transporter/transporter';


@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivateChild {

  constructor(private router: Router, public jwtService: JWTService, private transporter: TransporterService) {}

  canActivateChild(route: ActivatedRouteSnapshot): boolean {

    const expectedRole = route.data.expectedRole as string;
    if (this.jwtService.hasToken() && expectedRole && this.jwtService.hasRole(expectedRole)) {

      return true;
    }

    this.router.navigate(['/']);
    this.transporter.sendMessage({type: 'sessionExpired', data: true});
    return false;
  }

}
