import {Component, Input, OnInit} from '@angular/core';
import {News} from "../../../../shared/interfaces";
import {NewsService} from "../../../../shared/services/news/news.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'arh-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  @Input() isStartPage = false;

  news: News[];

  constructor(
    private newsService: NewsService,
    private titleService: Title
  ) {
    if (!this.isStartPage) {
      this.titleService.setTitle(`Новости - БУ ОО «Орелархплан»`)
    }
  }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.newsService.getNews().subscribe(news => {
      this.news = news;

      if (this.isStartPage) {
        this.news = this.news.filter((n, idx) => idx <= 2)
      }
    })
  }
}
