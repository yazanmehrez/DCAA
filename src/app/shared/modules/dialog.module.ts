import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {MatDialogModule} from '@angular/material';
import {LoginComponent} from '../../views/Accounts/login/login.component';

@NgModule({
  declarations: [],
  entryComponents: [LoginComponent],
  imports: [MatDialogModule],
  exports: [MatDialogModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DialogModule {
}
