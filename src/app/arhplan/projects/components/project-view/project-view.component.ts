import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Project} from "../../../../shared/interfaces";

@Component({
  selector: 'arh-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ProjectViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project,
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
