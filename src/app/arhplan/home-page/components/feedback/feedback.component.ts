import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'arh-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(`БУ ОО «Орелархплан»`)
  }

  ngOnInit(): void {

  }

}
