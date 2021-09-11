import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'arh-engineering-surveys-service',
  templateUrl: './engineering-surveys-service.component.html',
  styleUrls: ['./engineering-surveys-service.component.scss']
})
export class EngineeringSurveysServiceComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(`Выполнение инженерно-геодезических изысканий - БУ ОО «Орелархплан»`)
  }

  ngOnInit(): void {
  }

}
