import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'arh-feedback-form-modal',
  templateUrl: './feedback-form-modal.component.html',
  styleUrls: ['./feedback-form-modal.component.scss']
})
export class FeedbackFormModalComponent implements OnInit {

  formModal: FormGroup
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FeedbackFormModalComponent>,
  ) {
  }

  ngOnInit(): void {
    this.formModal = this.fb.group({
      userName: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern("^\\+7\\s\\([0-9]{3}\\)\\s[0-9]{3}-[0-9]{2}-[0-9]{2}$")]),
      subjectMessage: new FormControl(null, Validators.required),
      textMessage: new FormControl(null, Validators.required),
      isAgree: new FormControl(true, Validators.required)
    });
  }

  submit() {
    this.submitted = true;
    if (this.formModal.valid) {
      console.log(this.formModal.value)
    }
  }

  close() {
    this.dialogRef.close();
  }

}
