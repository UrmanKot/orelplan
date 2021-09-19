import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GisogdPageComponent} from "./components/gisogd-page/gisogd-page.component";

const routes: Routes = [
  {path: '', component: GisogdPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GisogdRouting { }
