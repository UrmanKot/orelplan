import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'arh-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {

  form: FormGroup
  submitted = false;

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern("^\\+7\\s\\([0-9]{3}\\)\\s[0-9]{3}-[0-9]{2}-[0-9]{2}$")]),
      subjectMessage: new FormControl(null, Validators.required),
      textMessage: new FormControl(null, Validators.required),
      isAgree: new FormControl(true, Validators.required)
    });
  }

  submit() {
    this.submitted = true;
    if (this.form.valid) {
      console.log(this.form.value)
    }
  }
}
