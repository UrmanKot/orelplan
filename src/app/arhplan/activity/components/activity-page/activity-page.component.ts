import {Component, Input, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'arh-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.scss']
})
export class ActivityPageComponent implements OnInit {

  @Input() isStartPage = false;

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(`Деятельность - БУ ОО «Орелархплан»`)
  }

  ngOnInit(): void {
  }

}
