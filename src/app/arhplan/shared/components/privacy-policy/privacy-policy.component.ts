import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'arh-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(
    private titleService: Title,
  ) {
    this.titleService.setTitle(`Политика конфиденциальности - БУ ОО «Орелархплан»`)
  }

  ngOnInit(): void {
  }

}
