import {Session} from './Entities/Admin/AboutUs/Session';

export interface UploadStatusResponse {
  chunkSize: number;
  concluded: boolean;
  createdDate: string;
  expired: boolean;
  fileName: string;
  id: string;
  lastUpdate: string;
  progress: number;
  status: string;
  successfulChunks: number;
  totalNumberOfChunks: number;
  user: number;

  fromSession(session: Session): UploadStatusResponse;

  fromSessionList(sessions: Session[]): UploadStatusResponse[];
}
