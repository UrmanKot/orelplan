import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRouting } from './projects.routing';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';


@NgModule({
  declarations: [
    ProjectsPageComponent
  ],
  imports: [
    CommonModule,
    ProjectsRouting
  ]
})
export class ProjectsModule { }
