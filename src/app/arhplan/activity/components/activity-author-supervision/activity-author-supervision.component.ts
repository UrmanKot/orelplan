import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'arh-activity-author-supervision',
  templateUrl: './activity-author-supervision.component.html',
  styleUrls: ['./activity-author-supervision.component.scss']
})
export class ActivityAuthorSupervisionComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(`Осуществление авторского надзора - БУ ОО «Орелархплан»`)
  }

  ngOnInit(): void {
  }

}
