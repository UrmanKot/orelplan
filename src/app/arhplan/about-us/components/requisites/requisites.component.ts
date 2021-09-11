import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'arh-requisites',
  templateUrl: './requisites.component.html',
  styleUrls: ['./requisites.component.scss']
})
export class RequisitesComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(`Реквизиты - БУ ОО «Орелархплан»`);
  }

  ngOnInit(): void {
  }

}
