import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutUsPageComponent} from './components/about-us-page/about-us-page.component';
import {RequisitesComponent} from './components/requisites/requisites.component';
import {StructureComponent} from './components/structure/structure.component';

const routes: Routes = [
  {path: '', component: AboutUsPageComponent},
  {path: 'requisites', component: RequisitesComponent},
  {path: 'structure', component: StructureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
