import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'arh-land-use-rules-service',
  templateUrl: './land-use-rules-service.component.html',
  styleUrls: ['./land-use-rules-service.component.scss']
})
export class LandUseRulesServiceComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(`Подготовка проектов правил землепользования и застройки населенных пунктов - БУ ОО «Орелархплан»`)
  }

  ngOnInit(): void {
  }

}
