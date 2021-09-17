import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MatDialog} from "@angular/material/dialog";
import {ProjectViewComponent} from "../project-view/project-view.component";
import {Project} from "../../../../shared/interfaces";
import {ProjectsService} from "../../../../shared/services/projects/projects.service";

@Component({
  selector: 'arh-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  projects: Project[];
  isLoading = true;

  constructor(
    private titleService: Title,
    private projectsService: ProjectsService,
    private dialog: MatDialog
  ) {
    this.titleService.setTitle(`Наши проекты - БУ ОО «Орелархплан»`)
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectsService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.isLoading = false;
    })
  }

  openProject(project) {
    this.dialog.open<ProjectViewComponent>(ProjectViewComponent, {
      width: '900px',
      minHeight: '400px',
      autoFocus: false,
      panelClass: 'view-project',
      data: project
    });
  }

}
