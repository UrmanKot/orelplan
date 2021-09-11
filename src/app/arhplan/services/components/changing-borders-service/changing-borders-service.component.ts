import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'arh-changing-borders-service',
  templateUrl: './changing-borders-service.component.html',
  styleUrls: ['./changing-borders-service.component.scss']
})
export class ChangingBordersServiceComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(`Выполнение работ по установлению или изменению границ объектов землеустройства - БУ ОО «Орелархплан»`)
  }

  ngOnInit(): void {
  }

}
