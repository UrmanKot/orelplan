import {Component, Input, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'arh-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.scss']
})
export class AllServicesComponent implements OnInit {

  @Input() allServices = true;

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(`Услуги - БУ ОО «Орелархплан»`)
  }

  ngOnInit(): void {
  }

}
