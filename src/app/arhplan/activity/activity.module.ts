import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRouting } from './activity.routing';
import { ActivityPageComponent } from './components/activity-page/activity-page.component';
import { ActivityEngineeringDesignComponent } from './components/activity-engineering-design/activity-engineering-design.component';
import { ActivityConstructionControlComponent } from './components/activity-construction-control/activity-construction-control.component';
import { ActivityAuthorSupervisionComponent } from './components/activity-author-supervision/activity-author-supervision.component';
import { ActivityConsultationComponent } from './components/activity-consultation/activity-consultation.component';
import { ActivityConstructionManagementComponent } from './components/activity-construction-management/activity-construction-management.component';
import { ActivityPlanningDesignComponent } from './components/activity-planning-design/activity-planning-design.component';


@NgModule({
    declarations: [
        ActivityPageComponent,
        ActivityEngineeringDesignComponent,
        ActivityConstructionControlComponent,
        ActivityAuthorSupervisionComponent,
        ActivityConsultationComponent,
        ActivityConstructionManagementComponent,
        ActivityPlanningDesignComponent
    ],
    exports: [
        ActivityPageComponent
    ],
    imports: [
        CommonModule,
        ActivityRouting
    ]
})
export class ActivityModule { }
