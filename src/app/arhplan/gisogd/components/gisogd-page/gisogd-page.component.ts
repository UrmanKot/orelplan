import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'arh-gisogd-page',
  templateUrl: './gisogd-page.component.html',
  styleUrls: ['./gisogd-page.component.scss']
})
export class GisogdPageComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(`ГИСОГД - БУ ОО «Орелархплан»`)
  }

  ngOnInit(): void {
  }

}
