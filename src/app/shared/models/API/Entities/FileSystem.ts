import { UserProfile } from './UserProfile';

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
    fileDate: string;
    entryDate: string;
    enteredBy: UserProfile;
}