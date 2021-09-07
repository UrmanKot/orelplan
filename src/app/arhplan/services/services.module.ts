import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRouting } from './services.routing';
import { AllServicesComponent } from './components/all-services/all-services.component';
import { ChangingBordersServiceComponent } from './components/changing-borders-service/changing-borders-service.component';
import { LandUseRulesServiceComponent } from './components/land-use-rules-service/land-use-rules-service.component';
import { SurveyingTerritoryServiceComponent } from './components/surveying-territory-service/surveying-territory-service.component';
import { EngineeringSurveysServiceComponent } from './components/engineering-surveys-service/engineering-surveys-service.component';
import { ConstructionServiceComponent } from './components/construction-service/construction-service.component';


@NgModule({
    declarations: [
        AllServicesComponent,
        ChangingBordersServiceComponent,
        LandUseRulesServiceComponent,
        SurveyingTerritoryServiceComponent,
        EngineeringSurveysServiceComponent,
        ConstructionServiceComponent
    ],
    exports: [
        AllServicesComponent
    ],
    imports: [
        CommonModule,
        ServicesRouting
    ]
})
export class ServicesModule { }
