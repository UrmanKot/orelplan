import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NormativeLegalDocumentsComponent} from './components/normative-legal-documents/normative-legal-documents.component';
import {CombatingCorruptionDocumentsComponent} from './components/combating-corruption-documents/combating-corruption-documents.component';
import {DocumentsPageComponent} from './components/documents-page/documents-page.component';

const routes: Routes = [
  {path: '', component: DocumentsPageComponent},
  {path: 'normative-legal', component: NormativeLegalDocumentsComponent},
  {path: 'combating-corruption', component: CombatingCorruptionDocumentsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRouting { }
