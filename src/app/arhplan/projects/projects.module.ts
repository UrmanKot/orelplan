import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRouting } from './projects.routing';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { ProjectViewComponent } from './components/project-view/project-view.component';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    ProjectsPageComponent,
    ProjectViewComponent
  ],
    imports: [
        CommonModule,
        ProjectsRouting,
        MatDialogModule
    ]
})
export class ProjectsModule { }
