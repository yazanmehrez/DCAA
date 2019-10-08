import {ApplicationRole} from './ApplicationRole';
import {AppUser} from './AppUser';


export interface ApplicationUserRole {
  appUser: AppUser;
  role: ApplicationRole;
}
