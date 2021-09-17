import { Component, OnInit } from '@angular/core';
import {News} from "../../../../shared/interfaces";
import {ActivatedRoute} from "@angular/router";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'arh-viewing-news',
  templateUrl: './viewing-news.component.html',
  styleUrls: ['./viewing-news.component.scss']
})
export class ViewingNewsComponent implements OnInit {

  newsId = this.route.snapshot.paramMap.get('id');
  news: News;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private titleService: Title
  ) {
    this.titleService.setTitle(`Новости - БУ ОО «Орелархплан»`)
  }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.db.object('news/' + this.newsId).valueChanges().subscribe((news: News) => {
      this.news = news;
      this.titleService.setTitle(`${this.news.title} - БУ ОО «Орелархплан»`);
    });
  }

}
