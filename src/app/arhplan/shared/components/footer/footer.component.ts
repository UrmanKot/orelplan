import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FeedbackFormModalComponent} from "../feedback-form-modal/feedback-form-modal.component";

@Component({
  selector: 'arh-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentDate: Date;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.currentDate = new Date();
  }

  openFeedback() {
    this.dialog.open<FeedbackFormModalComponent>(FeedbackFormModalComponent, {
      width: 'auto',
      height: 'auto',
      autoFocus: false,
      panelClass: 'feedback-modal',
    });
  }

  close() {

  }
}
