import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'arh-activity-construction-management',
  templateUrl: './activity-construction-management.component.html',
  styleUrls: ['./activity-construction-management.component.scss']
})
export class ActivityConstructionManagementComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(`Управление проектами строительства - БУ ОО «Орелархплан»`)
  }

  ngOnInit(): void {
  }

}
