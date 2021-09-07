import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us.routing';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { StructureComponent } from './components/structure/structure.component';
import { RequisitesComponent } from './components/requisites/requisites.component';


@NgModule({
  declarations: [
    AboutUsPageComponent,
    StructureComponent,
    RequisitesComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
