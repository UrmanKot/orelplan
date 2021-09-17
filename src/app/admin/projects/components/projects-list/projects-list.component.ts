import {Component, OnInit} from '@angular/core';
import {Project} from "../../../../shared/interfaces";
import {ProjectsService} from "../../../../shared/services/projects/projects.service";

@Component({
  selector: 'arh-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  projects: Project[];
  isLoading = true;

  constructor(
    private projectsService: ProjectsService,
  ) {
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

}
