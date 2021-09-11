import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormativeLegalDocumentsComponent } from './components/normative-legal-documents/normative-legal-documents.component';
import {DocumentsRouting} from './documents.routing';
import { CombatingCorruptionDocumentsComponent } from './components/combating-corruption-documents/combating-corruption-documents.component';
import { DocumentsPageComponent } from './components/documents-page/documents-page.component';


@NgModule({
  declarations: [
    NormativeLegalDocumentsComponent,
    CombatingCorruptionDocumentsComponent,
    DocumentsPageComponent
  ],
  imports: [
    CommonModule,
    DocumentsRouting
  ]
})
export class DocumentsModule { }
