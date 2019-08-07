import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {WelcomeComponent} from '../app/modals/welcome/welcome.component';
import {MatDialogModule} from '@angular/material';

@NgModule({
    declarations: [WelcomeComponent],
    entryComponents: [WelcomeComponent],
    imports: [MatDialogModule],
    exports: [MatDialogModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DialogModule {
}
