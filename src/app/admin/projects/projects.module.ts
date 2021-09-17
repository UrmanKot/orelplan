import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRouting } from './projects.routing';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import {EditProjectComponent} from "./components/edit-project/edit-project.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProjectsListComponent,
    CreateProjectComponent,
    EditProjectComponent
  ],
    imports: [
        CommonModule,
        ProjectsRouting,
        ReactiveFormsModule
    ]
})
export class ProjectsModule { }
