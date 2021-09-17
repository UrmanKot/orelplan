import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'arh-activity-consultation',
  templateUrl: './activity-consultation.component.html',
  styleUrls: ['./activity-consultation.component.scss']
})
export class ActivityConsultationComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(`Консультативные услуги в области архитектурных работ - БУ ОО «Орелархплан»`)
  }

  ngOnInit(): void {
  }

}
