import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {MatDialogModule} from '@angular/material';
import {LoginComponent} from '../../views/Accounts/login/login.component';
import {ConfirmationModalComponent} from '../../modals/confirmation-modal/confirmation-modal.component';
import {RegisterAgencyComponent} from '../../modals/register-agency/register-agency.component';

@NgModule({
  declarations: [],
  entryComponents: [LoginComponent, ConfirmationModalComponent, RegisterAgencyComponent],
  imports: [MatDialogModule],
  exports: [MatDialogModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DialogModule {
}
