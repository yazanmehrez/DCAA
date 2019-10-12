import { UserProfile } from '../../UserProfile';
import { Status } from '../../../Enums/AdminEnum';

export interface ServiceStatus {
    statusId: number;
    subServiceId: number;
    transactionId: number;
    status: Status;
    htmlTemplate: string;
    entryDate: string;
    userProfileId: number;
    enteredBy: UserProfile;
}