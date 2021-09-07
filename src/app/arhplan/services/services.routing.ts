import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllServicesComponent} from './components/all-services/all-services.component';
import {ChangingBordersServiceComponent} from './components/changing-borders-service/changing-borders-service.component';
import {LandUseRulesServiceComponent} from './components/land-use-rules-service/land-use-rules-service.component';
import {SurveyingTerritoryServiceComponent} from './components/surveying-territory-service/surveying-territory-service.component';
import {EngineeringSurveysServiceComponent} from './components/engineering-surveys-service/engineering-surveys-service.component';
import {ConstructionServiceComponent} from './components/construction-service/construction-service.component';

const routes: Routes = [
  {path: '', component: AllServicesComponent},
  {path: 'changing-borders', component: ChangingBordersServiceComponent},
  {path: 'land-use-rules', component: LandUseRulesServiceComponent},
  {path: 'surveying-territory', component: SurveyingTerritoryServiceComponent},
  {path: 'engineering-surveys', component: EngineeringSurveysServiceComponent},
  {path: 'construction', component: ConstructionServiceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRouting { }
