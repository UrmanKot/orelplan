import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'arh-activity-planning-design',
  templateUrl: './activity-planning-design.component.html',
  styleUrls: ['./activity-planning-design.component.scss']
})
export class ActivityPlanningDesignComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(`Градостроительное проектирование - БУ ОО «Орелархплан»`)
  }

  ngOnInit(): void {
  }

}
