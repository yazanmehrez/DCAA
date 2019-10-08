import {ApplicationUserRole} from './ApplicationUserRole';

export interface AppUser {
  facebookId?: number;
  googleId?: number;
  userRoles: ApplicationUserRole[];
}
