import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {WelcomeComponent} from '../app/modals/welcome/welcome.component';
import {MatDialogModule} from '@angular/material';
import {LogoutConfirmationComponent} from '../app/modals/logout-confirmation/logout-confirmation.component';

@NgModule({
    declarations: [WelcomeComponent, LogoutConfirmationComponent],
    entryComponents: [WelcomeComponent, LogoutConfirmationComponent],
    imports: [MatDialogModule],
    exports: [MatDialogModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DialogModule {
}
