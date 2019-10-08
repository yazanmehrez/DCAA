import {Session} from './Entities/Admin/AboutUs/Session';

export interface SessionCreationStatusResponse {
    fileName: string;
    sessionId: string;
    userId: number;

    fromSession(session: Session): SessionCreationStatusResponse;
}
