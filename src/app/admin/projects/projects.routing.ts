import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectsListComponent} from "./components/projects-list/projects-list.component";
import {CreateProjectComponent} from "./components/create-project/create-project.component";
import {EditProjectComponent} from "./components/edit-project/edit-project.component";

const routes: Routes = [
  {path: '', component: ProjectsListComponent},
  {path: 'create', component: CreateProjectComponent},
  {path: 'edit/:id', component: EditProjectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRouting { }
