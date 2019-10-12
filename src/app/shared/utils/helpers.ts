import {HttpErrorResponse} from '@angular/common/http';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ConfigService} from './config.service';

export class Helper {

  public static controlToModel(control: any) {
    let model: {};
    if (control) {
      model = {};
      for (const key in control) {
        if (control.hasOwnProperty(key)) {
          model[key] = control[key].value;
        }
      }
    }
    return model;
  }

  public static objectToStringArray(obj: any) {
    // tslint:disable-next-line:prefer-const
    let arr: string[] = [];
    if (obj) {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (obj[key] instanceof Array) {
            (obj[key] as string[]).forEach((str: string) => {
              arr.push(str);
            });
          } else {
            arr.push(obj[key]);
          }

        }
      }
    }
    return arr;
  }

  public static isJson(text: string): boolean {
    return (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, '')));
  }

  public static validateEmail(email: string) {
    // tslint:disable-next-line:max-line-length
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  public static modelToModel(source: {}, destination: {}) {
    console.log(source);
    if (source) {
      for (const key in source) {
        if (source.hasOwnProperty(key)) {
          destination[key] = source[key];
        }
      }
    }
    return destination;
  }

  public static errorsArray(err: HttpErrorResponse) {
    let errorsArray: string[] = [];
    const error: {} = err.error;
    if (error) {
      for (const key in error) {
        if (error.hasOwnProperty(key) && key !== 'id') {
          if (typeof error[key] === 'object') {
            errorsArray = [...errorsArray, ...this.objectToStringArray(error[key])];
          }
          if (typeof error[key] === 'string') {
            if ((error[key] as string).indexOf('One or more validation errors') > -1 ||
              (error[key] as string).indexOf('80000') > -1) {
              continue;
            }
            errorsArray.push(error[key]);
          }

        }
      }
    }
    return errorsArray;
  }

  public static getImageSize(url: string, size: string) {
    url = url.split('\\\\').join('/').split('\\').join('/');
    if (size == null) {
      return new ConfigService().getApiURI() + '/' + url;
    }
    return new ConfigService().getApiURI() + '/' + url.replace('Uploads/images', `Uploads/images/${size}`);
  }

  public static commaSeperated(value: number) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
