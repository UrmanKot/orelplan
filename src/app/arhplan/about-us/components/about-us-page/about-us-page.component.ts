import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'arh-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.scss']
})
export class AboutUsPageComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(`О нас - БУ ОО «Орелархплан»`)
  }

  ngOnInit(): void {
  }

}
