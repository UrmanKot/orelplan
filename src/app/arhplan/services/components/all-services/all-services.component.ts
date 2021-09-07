import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'arh-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.scss']
})
export class AllServicesComponent implements OnInit {

  @Input() allServices = true;

  constructor() { }

  ngOnInit(): void {
  }

}
