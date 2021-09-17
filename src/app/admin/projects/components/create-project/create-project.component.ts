import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AlertService} from "../../../services/alert.service";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/compat/storage";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Project} from "../../../../shared/interfaces";

@Component({
  selector: 'arh-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  previewImageSrc: string | ArrayBuffer;
  form: FormGroup;
  fileToUpload: File;

  downloadableURL = '';
  task: AngularFireUploadTask;
  progressValue: Observable<number>;

  constructor(
    private alertService: AlertService,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      text: new FormControl(null, Validators.required),
    });
  }

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

        this.db.list('/projects').push(project);
        this.alertService.success('Успешно!')
        this.router.navigateByUrl('/arh-admin/projects').then();
      });
    }
  }
}
