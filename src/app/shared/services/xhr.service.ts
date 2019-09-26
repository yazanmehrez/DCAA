import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class XhrService {

  private progress = new BehaviorSubject('0');
  currentProgress = this.progress.asObservable();

  constructor(private httpClient: HttpClient) {

  }

  changeMessage(message: string) {
    this.progress.next(message);
  }

  // tslint:disable-next-line:variable-name
  deleteCall(file_id: number, url: string, authtoken: string) {
    return new Promise((resolver, reject) => {
      url = url + '/' + file_id;
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      if (authtoken != null) {
        headers = headers.append('Authorization', 'Bearer ' + authtoken);
      }

      this.httpClient.delete(url, { headers, observe: 'response' })

      .subscribe((res: HttpResponse<{}>) => {
        resolver(res);
      }, (error) => {
        reject(error);
      });
    });
  }

  RestAPI(formData: FormData, serverUrl: string, authtoken: string, isJson: boolean = false): Promise<any> {
    return new Promise((resolver, reject) => {

      let headers = new HttpHeaders();
      headers = headers.append('Authorization', 'Bearer ' + authtoken);
      headers = headers.append('Content-Type', (isJson ? 'multipart/form-data' : 'multipart/form-data'));

      const req = new HttpRequest('POST', serverUrl, formData, {
        headers, reportProgress: true
      });

      console.log('fl', req);
      let percentDone  = 0;
      this.httpClient.request(req).subscribe((httpevent: any) => {
        // Via this API, you get access to the raw event stream.
        // Look for upload progress events.
        if (httpevent.type === HttpEventType.UploadProgress) {
          // This is an upload progress event. Compute and show the % done:
          percentDone = Math.round(100 * httpevent.loaded / httpevent.total);
          this.changeMessage(percentDone.toString());
        } else if (httpevent instanceof HttpResponse) {
          resolver(httpevent.body);
          percentDone = 0;
          this.changeMessage(percentDone.toString());
          // console.log('File is completely uploaded!');
        }
      },
      (err: void) => {
        console.log(err);
        reject(err);
      },
      () => {
        // completed event - job done after
        percentDone = 0;
        this.changeMessage(percentDone.toString());
      });
    });
  }
}
