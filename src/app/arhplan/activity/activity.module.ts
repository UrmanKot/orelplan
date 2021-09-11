import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRouting } from './activity.routing';
import { ActivityPageComponent } from './components/activity-page/activity-page.component';


@NgModule({
  declarations: [
    ActivityPageComponent
  ],
  imports: [
    CommonModule,
    ActivityRouting
  ]
})
export class ActivityModule { }
