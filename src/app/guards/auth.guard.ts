// auth.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { JWTService } from '../shared/utils/JWTtoken.service';
import { TransporterService } from '../shared/transporter/transporter';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, public jwtService: JWTService, private transporter: TransporterService) {}

  canActivate() {

    if (this.jwtService.isExpired()) {
      this.router.navigate(['/']);
      this.transporter.sendMessage({type: 'sessionExpired', data: true});

      return false;
    }

    return true;
  }
}
