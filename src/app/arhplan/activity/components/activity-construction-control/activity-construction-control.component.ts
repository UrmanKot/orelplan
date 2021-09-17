import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'arh-activity-construction-control',
  templateUrl: './activity-construction-control.component.html',
  styleUrls: ['./activity-construction-control.component.scss']
})
export class ActivityConstructionControlComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(`Выполнение строительного контроля - БУ ОО «Орелархплан»`)
  }

  ngOnInit(): void {
  }

}
