import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'arh-combating-corruption-documents',
  templateUrl: './combating-corruption-documents.component.html',
  styleUrls: ['./combating-corruption-documents.component.scss']
})
export class CombatingCorruptionDocumentsComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(`Противодействие коррупции - БУ ОО «Орелархплан»`)
  }

  ngOnInit(): void {
  }

}
