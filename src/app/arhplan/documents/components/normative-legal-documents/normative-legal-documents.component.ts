import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'arh-normative-legal-documents',
  templateUrl: './normative-legal-documents.component.html',
  styleUrls: ['./normative-legal-documents.component.scss']
})
export class NormativeLegalDocumentsComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(`Нормативно-правовые документы - БУ ОО «Орелархплан»`)
  }

  ngOnInit(): void {
  }

}
