import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'dcaa-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {
  public id: number;
  public name: string;
  public result;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

}
