
import { UserProfile } from '../../UserProfile';

import { SubServices } from 'C:/DCAA-Website/FrontEnd/DCAAWebsite/src/app/shared/models/API/Entities/Admin/Services/SubServices'


export interface ApproverPersonnel {
    approverId: number;
    order: number;
    entryDate: string;
    isAdmin: boolean;
    approverProfileId: number;
    approver: UserProfile;
    subServiceId: number;
    subService: SubServices;
}