import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GisogdRouting } from './gisogd.routing';
import { GisogdPageComponent } from './components/gisogd-page/gisogd-page.component';


@NgModule({
  declarations: [
    GisogdPageComponent
  ],
  imports: [
    CommonModule,
    GisogdRouting
  ]
})
export class GisogdModule { }
