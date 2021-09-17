import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'arh-activity-engineering-design',
  templateUrl: './activity-engineering-design.component.html',
  styleUrls: ['./activity-engineering-design.component.scss']
})
export class ActivityEngineeringDesignComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(`Инженерно-техническое проектирование - БУ ОО «Орелархплан»`)
  }

  ngOnInit(): void {
  }

}
