import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'arh-construction-service',
  templateUrl: './construction-service.component.html',
  styleUrls: ['./construction-service.component.scss']
})
export class ConstructionServiceComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(`Подготовка проектов генеральных планов населенных пунктов - БУ ОО «Орелархплан»`)
  }

  ngOnInit(): void {
  }

}
