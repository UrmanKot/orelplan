import { Component, OnInit } from '@angular/core';
import {Project} from "../../../../shared/interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AlertService} from "../../../services/alert.service";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/compat/storage";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'arh-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  projectId = this.route.snapshot.paramMap.get('id');

  previewImageSrc: string | ArrayBuffer;
  fileToUpload: File;
  isLoading = true;
  project: Project;

  form = new FormGroup({
    text: new FormControl(null, Validators.required),
  });

  constructor(
    private alertService: AlertService,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.db.object('projects/' + this.projectId).valueChanges().subscribe((project: Project) => {
      this.isLoading = false;
      this.project = project;
      this.form = new FormGroup({
        text: new FormControl(project?.text, Validators.required),
      });
    });
  }

  downloadableURL = '';
  task: AngularFireUploadTask;
  progressValue: Observable<number>;

  selectFile(event) {
    this.fileToUpload = event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.previewImageSrc = reader.result;
    reader.readAsDataURL(this.fileToUpload);
  }

  async submit() {
    if (this.form.invalid) {
      return;
    }

    if (this.fileToUpload) {
      const filePath = `${'images'}/${this.fileToUpload.name}`;
      this.task = this.storage.upload(filePath, this.fileToUpload);

      this.progressValue = this.task.percentageChanges();

      (await this.task).ref.getDownloadURL().then(url => {
        this.downloadableURL = url;

        const project: Project = {
          text: this.form.value.text,
          uri: this.downloadableURL
        };

        this.alertService.success('Успешно!');
        this.db.list('projects').update(this.projectId, project).then(r => r);
        this.router.navigateByUrl('/arh-admin/projects').then();
      });
    } else {

      const project: Project = {
        text: this.form.value.text,
        uri: this.project.uri
      };

      this.alertService.success('Успешно!');
      this.db.list('projects').update(this.projectId, project).then(r => r);
      this.router.navigateByUrl('/arh-admin/projects').then();
    }
  }

  deleteProject() {
    this.alertService.success('Успешно!');
    this.db.list('projects').remove(this.projectId).then(r => r);
    this.router.navigateByUrl('/arh-admin/projects').then();
  }

}
