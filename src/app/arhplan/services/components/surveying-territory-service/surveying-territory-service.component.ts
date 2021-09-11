import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'arh-surveying-territory-service',
  templateUrl: './surveying-territory-service.component.html',
  styleUrls: ['./surveying-territory-service.component.scss']
})
export class SurveyingTerritoryServiceComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(`Подготовка проектов планировки территории и проектов межевания территории (ПП +
        ПМ) - БУ ОО «Орелархплан»`)
  }

  ngOnInit(): void {
  }

}
