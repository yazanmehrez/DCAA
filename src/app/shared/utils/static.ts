
import { ConfigService } from './config.service';
import { HttpHeaders, HttpRequest, HttpClient, HttpResponse } from '@angular/common/http';
import { FeatureSection } from 'src/app/views/Accounts/accountsmodel';


export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


export class StaticConstants {
    selectConfig(displayName: string, placeholderText: string) {
      return {
        displayKey: displayName, // if objects array passed which key to be displayed defaults to description
        search: true, // true/false for the search functionlity defaults to false,
        height: 'auto', // height of the list so that if there are more no of items
                        // it can show a scroll defaults to auto. With auto height scroll will never appear
        placeholder: placeholderText, // text to be displayed when no item is selected defaults to Select,
        customComparator: () => {}, // a custom function using which user
                                    // wants to sort the items. default is undefined and Array.sort() will be used in that case,
        limitTo: 10000, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
        moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
        noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
        searchPlaceholder: 'Search', // label thats displayed in search input,
        searchOnKey: displayName // key on which search should be performed this will
                            // be selective search. if undefined this will be extensive search on all keys
      };
    }
    dateFormat() {
      return MY_FORMATS;
    }
    languages() {
        return [{
            id: 1,
            name: 'en',
            actualName: 'English'
        }, {
            id: 2,
            name: 'ar',
            actualName: 'Arabic'
        }];
    }

    languageMeaning() {
        return {
            en: 'English',
            ar: 'Arabic'
        };
    }




    featureSection() {
        return [{
            enum: FeatureSection.accountCreated,
            name: 'Account Created'
        }, {
            enum: FeatureSection.emailVerification,
            name: 'Email Verification'
        }, {
            enum: FeatureSection.passwordResetRequest,
            name: 'Password Reset'
        }, {
            enum: FeatureSection.emailChange,
            name: 'Email Change'
        }];
    }

    // tinymce

    tinyMceInit(httpClient: HttpClient) {
        return {
            skin_url: '/assets/skins/ui/oxide',
            content_css: [
              '//fonts.googleapis.com/css?family=Open+Sans:400,600',
              '/assets/skins/ui/oxide/content.min.css'
            ],
            emoticons_database_url: '/assets/emojis/emojis.min.js',
            plugins: `print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media
            template codesample table charmap hr pagebreak nonbreaking anchor toc autoresize autosave code
            directionality emoticons importcss legacyoutput noneditable paste quickbars save spellchecker tabfocus
            insertdatetime advlist lists wordcount
            imagetools textpattern help`,
            toolbar: `formatselect | bold italic strikethrough forecolor backcolor textcolor
            formatpainter | link image media pageembed | alignleft
            aligncenter alignright alignjustify | numlist bullist outdent indent | table | emoticons | removeformat`,
            image_advtab: true,
            link_list: [
              { title: 'My page 1', value: 'http://www.tinymce.com' },
              { title: 'My page 2', value: 'http://www.moxiecode.com' }
            ],
            image_list: [
              { title: 'My page 1', value: 'http://www.tinymce.com' },
              { title: 'My page 2', value: 'http://www.moxiecode.com' }
            ],
            image_class_list: [
              { title: 'None', value: '' },
              { title: 'Some class', value: 'class-name' }
            ],
            importcss_append: true,
            min_height: 350,
            max_height: 900,
            file_picker_callback(callback, value, meta) {
              /* Provide file and text for the link dialog */
              if (meta.filetype === 'file') {
                callback('https://www.google.com/logos/google.jpg', { text: 'My text' });
              }

              /* Provide image and alt text for the image dialog */
              if (meta.filetype === 'image') {
                callback('https://www.google.com/logos/google.jpg', { alt: 'My alt text' });
              }

              /* Provide alternative source and posted for the media dialog */
              if (meta.filetype === 'media') {
                callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.google.com/logos/google.jpg' });
              }
            },
            templates: [
              { title: 'Some title 1', description: 'Some desc 1', content: 'My content' },
              { title: 'Some title 2', description: 'Some desc 2',
              content: '<div class="mceTmpl"><span class="cdate">cdate</span><span class="mdate">mdate</span>My content2</div>' }
            ],
            template_cdate_format: '[CDATE: %m/%d/%Y : %H:%M:%S]',
            template_mdate_format: '[MDATE: %m/%d/%Y : %H:%M:%S]',
            image_caption: true,
            spellchecker_dialog: true,
            // spellchecker_whitelist: ['Ephox', 'Moxiecode'],
            // tinycomments_mode: 'embedded',
            // mentions_fetch: mentionsFetchFunction,
            // content_style: '.mce-annotation { background: #fff0b7; } .tc-active-annotation {background: #ffe168; color: black; }',

            /* without images_upload_url set, Upload tab won't show up*/
            // images_upload_url: new ConfigService().getApiURI() + '/api/TinyMCEFileUploader',
            // tslint:disable-next-line:max-line-length
            images_upload_handler: (blobInfo: { blob: () => string | Blob; }, success: (arg0: any) => void, failure: { (arg0: string): void; (arg0: string): void; }) => {
                const data = new Promise((resolver, reject) => {
                    let formData: FormData;
                    formData = new FormData();
                    formData.append('file', blobInfo.blob(), 'tinymce');
                    const token: string = localStorage.getItem('auth_token');
                    let headers = new HttpHeaders();
                    headers = headers.append('Authorization', 'Bearer ' + token);
                    headers = headers.append('Content-Type', 'multipart/form-data');

                    const req = new HttpRequest('POST', `${new ConfigService().getApiURI()}/api/TinyMCEFileUploader`, formData, {
                    headers, reportProgress: true, responseType: 'json'
                    });


                    httpClient.request(req).subscribe((httpevent: any) => {
                        if (httpevent instanceof HttpResponse) {
                            resolver(httpevent.body);
                        }
                    },
                    (err: void) => {
                      reject(err);
                    },
                    () => {
                      // completed event - job done after
                    });
                }).then((json: any) => {
                    success(json.location);
                }).catch((err: any) => {
                    failure('HTTP Error: ' + err.status);
                });
              }
          };
    }

}
