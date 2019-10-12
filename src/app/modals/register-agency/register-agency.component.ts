import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'dcaa-register-association',
  templateUrl: './register-agency.component.html',
  styleUrls: ['./register-agency.component.scss']
})
export class RegisterAgencyComponent implements OnInit {
  inProgress = false;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

}
