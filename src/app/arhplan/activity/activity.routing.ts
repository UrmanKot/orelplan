import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActivityPageComponent} from './components/activity-page/activity-page.component';
import {ActivityEngineeringDesignComponent} from "./components/activity-engineering-design/activity-engineering-design.component";
import {ActivityConstructionControlComponent} from "./components/activity-construction-control/activity-construction-control.component";
import {ActivityAuthorSupervisionComponent} from "./components/activity-author-supervision/activity-author-supervision.component";
import {ActivityConsultationComponent} from "./components/activity-consultation/activity-consultation.component";
import {ActivityConstructionManagementComponent} from "./components/activity-construction-management/activity-construction-management.component";
import {ActivityPlanningDesignComponent} from "./components/activity-planning-design/activity-planning-design.component";

const routes: Routes = [
  {path: '', component: ActivityPageComponent},
  {path: 'engineering-design', component: ActivityEngineeringDesignComponent},
  {path: 'construction-control', component: ActivityConstructionControlComponent},
  {path: 'author-supervision', component: ActivityAuthorSupervisionComponent},
  {path: 'consultation', component: ActivityConsultationComponent},
  {path: 'construction-management', component: ActivityConstructionManagementComponent},
  {path: 'planning-design', component: ActivityPlanningDesignComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRouting { }
