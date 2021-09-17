import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../../services/alert.service';
import {News} from '../../../../shared/interfaces';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/compat/storage";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'arh-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {

  previewImageSrc: string | ArrayBuffer;
  form: FormGroup;
  fileToUpload: File;

  constructor(
    private alertService: AlertService,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      previewText: new FormControl(null),
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

        const news: News = {
          title: this.form.value.title,
          text: this.form.value.text,
          previewText: this.form.value.previewText,
          date: new Date().toDateString(),
          uri: this.downloadableURL
        };

        this.db.list('/news').push(news);
        this.alertService.success('Успешно!')
        this.router.navigateByUrl('/arh-admin/news').then();
      });
    }
  }
}
