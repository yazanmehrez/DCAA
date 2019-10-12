import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {RegisterAgencyComponent} from '../../../modals/register-agency/register-agency.component';

@Component({
  selector: 'dcaa-company-association',
  templateUrl: './company-association.component.html',
  styleUrls: ['./company-association.component.scss']
})
export class CompanyAssociationComponent implements OnInit {
  assosiations = [
    {name: 'Yazan', description: 'Agency'},
    {name: 'Yazan', description: 'Agency'},
    {name: 'Yazan', description: 'Agency'},
    {name: 'Yazan', description: 'Agency'},
    {name: 'Yazan', description: 'Agency'},
    {name: 'Yazan', description: 'Agency'},
    {name: 'Yazan', description: 'Agency'},
  ];

  constructor(private dialog: MatDialog) {
  }

  addAgency(agency) {
    const dialogRef: MatDialogRef<RegisterAgencyComponent> = this.dialog.open(RegisterAgencyComponent,
      {panelClass: 'dcaa-register-agency'});
    dialogRef.afterClosed().subscribe(result => {
      // do something
    });
  }

  ngOnInit() {
  }

}
