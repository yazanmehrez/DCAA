
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ConfigService } from './config.service';
import { FileSystem } from '../models/fileSystem';
import { StaticConstants } from './static';
@Pipe({
  name: 'helper'
})
export class HelperPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {

  }
  myurl: string = new ConfigService().getApiURI();

  transform(value: any, args?: any): any {

    if (!value) {
      if (args === 'fsString') {
        return 'assets/images/nophoto.svg';
      }
      if (args === 'fsObjString') {
        return 'assets/images/nophoto.svg';
      }
      return null;
    }

    if (args === 'removeGuid') {
      const text: string = value as string;
      const fileName: string = text.split('_-_')[1];
      return fileName;
    }


    if (args === 'isRTL') {
      return value === 'ar' || value === 'hb';
    }


    if (args === 'featureSection') {
      const langs = new StaticConstants().featureSection().find(rst => {
        return rst.enum === (value as number);
      });

      return langs ? langs.name : null;
    }
    if (args === 'fl') {
      const langs = new StaticConstants().languageMeaning();
      return langs[value];
    }
    if (args === 'fsString') {

      const fs: FileSystem = value;
      const newStr = fs.fileLocation;
      return `${new ConfigService().getApiURI()}/${newStr}`;
    }
    if (args === 'fsObjString') {
      const fs: FileSystem = JSON.parse(value);

      const newStr = fs[0].fileLocation;
      return `${new ConfigService().getApiURI()}/${newStr}`;
    }
    if (args === 'fsObjThumbString') {
      const fs: FileSystem = JSON.parse(value);
      const newStr = fs[0].fileLocation.replace('Uploads\\images', 'Uploads\\images\\medium');
      return `${new ConfigService().getApiURI()}/${newStr}`;
    }
    if (args === 'fsObjMaxString') {
      const fs: FileSystem = JSON.parse(value);
      const newStr = fs[0].fileLocation.replace('Uploads\\images', 'Uploads\\images\\max') || fs[0].fileLocation;
      return `${new ConfigService().getApiURI()}/${newStr}`;
    }
    if (args === 'fsObjSmallString') {
      const fs: FileSystem = JSON.parse(value);
      const newStr = fs[0].fileLocation.replace('Uploads\\images', 'Uploads\\images\\small');
      return `${new ConfigService().getApiURI()}/${newStr}`;
    }
    if (args === 'clearundefined') {
      value = (value === 'undefined') ? '' : value;
    }
    if (args === 'rewriteUrlThumb') {
      value = value.replace('~\\', '/').replace('\\', '/').replace('\n', '/').replace('\n', '/');
      const newStr = value.replace('Uploads/images', 'Uploads/images/medium');
      return `${new ConfigService().getApiURI()}/${newStr}`;
    }
    if (args === 'rewriteUrl') {
      value = value.replace('~\\', '/').replace('\\', '/');
      return `${new ConfigService().getApiURI()}/${value}`;
    }
    if (args === 'rewriteUrlmax') {
      value = value.replace('~\\', '/').replace('\\', '/').replace('\n', '/');
      const newStr = value.replace('Uploads/images', 'Uploads/images/max');
      return `${new ConfigService().getApiURI()}/${newStr}`;
    }
    if (args === 'rewriteUrlsmall') {
      value = value.replace('~\\', '/').replace('\\', '/').replace('\n', '/');
      const newStr = value.replace('Uploads/images', 'Uploads/images/small');
      return `${new ConfigService().getApiURI()}/${newStr}`;
    }
    if (args[0] === 'rewriteUrl') {
      value = value.replace('~\\', '/').replace('\\', '/');
      if (args[0] === 'medium') {
        value = value.replace('Uploads', 'Uploads/medium');
      }
      return `${new ConfigService().getApiURI()}/${value}`;
    }
    if (args === 'sanitize') {
      return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }
    if (args === 'fileExt') {
      return (value as string).toLowerCase().replace('.', '');
    }
    if (args === 'fileSize') {
      return value > 1000 ? `${Math.round(value / 1000)}MB` : `${value}Kb`;
    }
  }

}
