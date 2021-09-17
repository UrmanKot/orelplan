import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {News} from '../../../../shared/interfaces';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {AlertService} from "../../../services/alert.service";
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/compat/storage";
import {Observable} from "rxjs";

@Component({
  selector: 'arh-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.scss']
})
export class EditNewsComponent implements OnInit {

  newsId = this.route.snapshot.paramMap.get('id');

  previewImageSrc: string | ArrayBuffer;
  fileToUpload: File;
  isLoading = true;
  news: News;

  form = new FormGroup({
    title: new FormControl(null, Validators.required),
    text: new FormControl(null, Validators.required),
    previewText: new FormControl(null),
  });

  constructor(
    private alertService: AlertService,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.db.object('news/' + this.newsId).valueChanges().subscribe((news: News) => {
      this.isLoading = false;
      this.news = news;
      this.form = new FormGroup({
        title: new FormControl(news?.title, Validators.required),
        text: new FormControl(news?.text, Validators.required),
        previewText: new FormControl(news?.previewText, Validators.required),
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

        const news: News = {
          title: this.form.value.title,
          text: this.form.value.text,
          previewText: this.form.value.previewText,
          date: this.news.date,
          uri: this.downloadableURL
        };

        this.alertService.success('Успешно!');
        this.db.list('news').update(this.newsId, news).then(r => r);
        this.router.navigateByUrl('/arh-admin/news').then();
      });
    } else {
      const news: News = {
        title: this.form.value.title,
        text: this.form.value.text,
        previewText: this.form.value.previewText,
        date: this.news.date,
        uri: this.news.uri,
      };

      this.alertService.success('Успешно!');
      this.db.list('news').update(this.newsId, news).then(r => r);
      this.router.navigateByUrl('/arh-admin/news').then();
    }
  }

  deleteNews() {
    this.alertService.success('Успешно!');
    this.db.list('news').remove(this.newsId).then(r => r);
    this.router.navigateByUrl('/arh-admin/news').then();
  }
}
