import {Component, ElementRef, EventEmitter, forwardRef, Input, NgZone, OnInit, Output, ViewChild} from '@angular/core';

import {SwalComponent, SweetAlert2LoaderService} from '@sweetalert2/ngx-sweetalert2';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {NgxGalleryComponent, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {XhrService} from 'src/app/shared/services/xhr.service';
import {ConfigService} from 'src/app/shared/utils/config.service';
import {FileSystem} from 'src/app/shared/models/fileSystem';
import {Helper} from 'src/app/shared/utils/helpers';


declare var swal;

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploaderComponent),
      multi: true
    }
  ]
})
export class FileUploaderComponent implements OnInit, ControlValueAccessor {


  @Input() classNames = 'albumLike';
  @Input() isStatic = false;
  @Input() initWithfirst = false;
  @Input() inputname = 'attachment';
  @Input() defaultInlineType = true;
  @Input() defaultInlineCaption = 'Select a file';
  previewmode: any;
  previewFs: FileSystem;
  previewIndex = 1;
  token: string;
  shortToken: string;
  inProgress: boolean;
  @Output() result = new EventEmitter();
  @Input() myurl: string = new ConfigService().getApiURI();
  fileSystems: Array<FileSystem> = [];
  localHostfileSystems: string;
  finalResultString: string;
  progress = 0;
  @Input() maximumUpload = 1;
  @Input() uploadType = 'default';
  @Input() accept = 'image/*';
  @Input() smallerAdd = false;
  @Input() floatingPreview = false;
  @ViewChild('previewDiv', {static: false}) previewDiv: ElementRef;
  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[];
  @ViewChild('ngxGalleryComp', {static: true}) ngxGalleryComp: NgxGalleryComponent;
  @ViewChild('swalComp', {static: true}) private swalComp: SwalComponent;

  constructor(private xhr: XhrService, private ngZone: NgZone, private readonly sweetAlert2Loader: SweetAlert2LoaderService) {
    this.xhr.currentProgress.subscribe((progress: string) => {
      this.ngZone.run(() => {
        this.progress = Number(progress);
      });

    });
    this.myurl = new ConfigService().getApiURI();

  }

  @Input() set accesstoken(value: string) {
    this.token = value;
    window.localStorage.setItem('AccessToken', value);
  }

  @Input() set shorttokeninput(value: string) {
    this.shortToken = value;
    window.localStorage.setItem('shortToken', value);

  }

  @Input() set clear(istrue: boolean) {
    this.clearStorage();
  }

  @Input() set filesysteminit(filesysteminit: string) {
    if (filesysteminit) {
      this.clearStorage();
      if (Helper.isJson((filesysteminit))) {
        const fsAll: Array<FileSystem> = JSON.parse(filesysteminit);
        fsAll.forEach((fs: FileSystem) => {
          this.fileSystems.push(fs);
        });

        this.result.emit(this.fileSystems);
        this.fileSystemsStr = JSON.stringify(this.fileSystems);
        this.setImageGallery();
        if (this.initWithfirst) {
          this.previewFs = this.fileSystems[0];
        }

      }

    }
  }

  // tslint:disable-next-line:variable-name
  _fileSystemsStr = null;
  get fileSystemsStr() {
    return this._fileSystemsStr;
  }

  set fileSystemsStr(val) {

    this._fileSystemsStr = val;
    this.propagateChange(this._fileSystemsStr);
  }

  writeValue(value: string): void {
    console.log(value);
    if (value !== undefined) {
      // this.fileSystemsStr = value;
      this.filesysteminit = value;
    }

  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  propagateChange = (_: any) => {

  }

  registerOnTouched(fn: any): void {

  }

  setDisabledState?(isDisabled: boolean): void {

  }

  ngOnInit() {
    this.filesysteminit = this.filesysteminit === 'undefined' ? '' : this.filesysteminit;

    /*this.localHostfileSystems = window.localStorage.getItem('fileSystems');
    if (this.localHostfileSystems) {
      this.fileSystems = JSON.parse(this.localHostfileSystems);
      this.result.emit(this.fileSystems);
      this.setImageGallery();

      if (this.initWithfirst) {
        this.previewFs = this.fileSystems[0];
      }
    }*/

    this.galleryOptions = [
      {
        image: false, thumbnails: false, width: '0px', height: '0px',
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        previewZoom: true,
        previewRotate: true
      }
    ];

  }

  autoCloseOnBlur() {
    if (this.floatingPreview) {
      this.hidePreview(null);
    }
  }

  openGallery() {
    const index = this.fileSystems.findIndex((fs: FileSystem) => {
      return fs.file_id === this.previewFs.file_id;
    });
    this.ngxGalleryComp.openPreview(index);
  }

  setImageGallery() {
    this.galleryImages = [];
    this.fileSystems.forEach((fs: FileSystem) => {
      this.galleryImages.push({
        small: Helper.getImageSize(fs.fileLocation, 'medium'),
        medium: Helper.getImageSize(fs.fileLocation, 'max'),
        big: Helper.getImageSize(fs.fileLocation, null)
      });
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.fileSystems, event.previousIndex, event.currentIndex);
    this.filesystemChanged();
  }

  clearStorage() {
    window.localStorage.removeItem('fileSystems');
    this.ngZone.run(() => {
      this.fileSystems = [];
    });
    this.result.emit(this.fileSystems);
    this.setImageGallery();
  }

  filesystemChanged() {
    this.result.emit(this.fileSystems);
    this.setImageGallery();
    this.finalResultString = JSON.stringify(this.fileSystems);
    this.fileSystemsStr = this.finalResultString;
    window.localStorage.setItem('fileSystems', this.finalResultString);
    if (this.initWithfirst) {
      this.previewFs = this.fileSystems[0];
    }
  }

  onFileSelectChange(event: any, onlyOneAllowed: boolean = false) {
    if (Array.from(event.target.files).length > 0) {
      const formData = new FormData();
      Array.from(event.target.files).forEach((file: File) => formData.append('file', file, file.name));
      this.inProgress = true;
      this.xhr.RestAPI(formData, `${this.myurl}/api/FileUploader`, this.token, true).then((asset: FileSystem) => {
        this.ngZone.run(() => {
          if (onlyOneAllowed) {
            this.clearStorage();
            this.fileSystems = [];
          }

          this.fileSystems.push(asset);

          this.filesystemChanged();
        });
        this.inProgress = false;
      }).catch(async err => {
        this.swalComp.title = 'Oops';
        this.swalComp.text = 'Something went wrong!';
        this.swalComp.type = 'error';
        this.swalComp.showCancelButton = false;
        this.swalComp.fire();
        this.inProgress = false;
        console.log(err);
      });
    }

  }

  downloadFile(fs: FileSystem) {
    const url: string = this.rewriteUrl(fs);
    const a: any = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    const fileName: string = fs.fileName;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

  rewriteUrl(fs: FileSystem): string {
    const value: string = fs.fileLocation.replace('~\\', '/').replace('\\', '/');
    return `${this.myurl}/${value}`;
  }

  deleteFileEvent(fs: FileSystem) {

    if (this.filesysteminit) {
      const fsAll: Array<FileSystem> = JSON.parse(this.filesysteminit);
      const exist: FileSystem = fsAll.find((fsystem: FileSystem) => {
        return fs.file_id === fsystem.file_id;
      });

      if (exist) {
        this.deleteLocal(fs);
      } else {
        this.delete(fs);
      }
    } else {
      this.delete(fs);
    }
  }

  showPreviewModal(fs: FileSystem, ui: any) {

    this.swalComp.title = fs.fileName;
    this.swalComp.html = ui;
    this.swalComp.type = null;
    this.swalComp.showCancelButton = false;
    this.swalComp.fire();
  }

  previewThis(fs: FileSystem) {
    this.ngZone.run(() => {
      this.previewFs = fs;
      setTimeout(() => {
        const slider = this.previewDiv.nativeElement;
        this.showPreviewModal(fs, slider);
      }, 100);
    });
  }

  hidePreview(event: any) {
    this.ngZone.run(() => {
      this.previewFs = null;
    });
  }

  previewRecord(event: any) {
    this.previewThis(this.previewFs);
  }

  deletefile(event: any) {
    this.deleteFileEvent(this.previewFs);
  }

  moreOption(fs: FileSystem, index: number) {
    this.ngZone.run(() => {
      this.previewFs = fs;
      this.previewIndex = index;
    });
  }

  deleteLocal(previewFs: FileSystem) {
    this.fileSystems.forEach((fs: FileSystem, index: number) => {
      if (previewFs.file_id === fs.file_id) {
        this.fileSystems.splice(index, 1);
        swal('Removed!', 'Process was completed successfully.', 'success');
        this.filesystemChanged();
      }
    });
  }

  delete(previewFs: FileSystem) {


    this.xhr.deleteCall(previewFs.file_id, `${this.myurl}/api/FileUploader`, this.token).then((result: any) => {

      this.ngZone.run(() => {
        this.previewFs = null;
        this.fileSystems.forEach((fs: FileSystem, index: number) => {
          if (previewFs.file_id === fs.file_id) {
            this.fileSystems.splice(index, 1);

            this.swalComp.title = 'Deleted!';
            this.swalComp.text = 'Process was completed successfully!';
            this.swalComp.type = 'success';
            this.swalComp.showCancelButton = false;
            this.swalComp.fire();

            this.filesystemChanged();
          }
        });
      });
    }).catch(err => {

      this.swalComp.title = 'Oops!';
      this.swalComp.text = 'Something went wrong!';
      this.swalComp.type = 'error';
      this.swalComp.showCancelButton = false;
      this.swalComp.fire();
      console.log(err);
    });

  }

  whatFileType(fs: FileSystem): string {

    let ext: string = fs ? fs.fileExtension.replace('.', '').toLowerCase() : null;
    if (ext) {
      ext = ext.toLowerCase();
      if (this.getImagesExtentions().indexOf(ext) > -1) {
        return 'image';
      } else if (this.getAudioExtentions().indexOf(ext) > -1) {
        return 'audio';
      } else if (this.getVideosExtentions().indexOf(ext) > -1) {
        return 'video';
      } else if (this.getOtherExtToOpen().indexOf(ext) > -1) {
        return 'othervalid';
      } else if (ext === 'pdf') {
        return 'pdf';
      } else {
        return 'others';
      }
    }

  }

  getImagesExtentions(): Array<string> {
    return ['jpg', 'jpeg', 'png', 'gif', 'tiff', 'svg'];
  }

  getVideosExtentions(): Array<string> {
    return ['mov', 'mpeg', 'mp4', 'webm', 'avi', 'wmv', 'ogg', 'flv', 'mov', 'webm'];
  }

  getAudioExtentions(): Array<string> {
    return ['mp3', 'wma', 'wav', 'aif', 'aifc', 'aiff', 'au', 'ea'];
  }

  getOtherExtToOpen(): Array<string> {
    return ['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx'];
  }


}
