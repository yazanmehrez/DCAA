// tslint:disable-next-line:class-name
import {UserProfile} from './API/Entities/UserProfile';

export interface FileSystem {
  file_id: number;

  fileName: string;

  fileSizeKB: number;

  fileLocation: string;

  fileExtension: string;

  videoThumbnail: string;

  pdfImage: string;

  otherFileThumbnail: string;

  pageId: number;

  sectionId: number;

  fileDate: Date | string;

  entryDate: Date | string;

  enteredBy: UserProfile;
}
