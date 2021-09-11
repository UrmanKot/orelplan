import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'arh-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(`выфвыф - БУ ОО «Орелархплан»`)
  }

  ngOnInit(): void {
  }

}
