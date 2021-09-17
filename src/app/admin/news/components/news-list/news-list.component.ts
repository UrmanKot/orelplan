import {Component, OnInit} from '@angular/core';
import {News} from '../../../../shared/interfaces';
import {NewsService} from "../../../../shared/services/news/news.service";

@Component({
  selector: 'arh-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  news: News[];
  isLoading = true;

  constructor(
    private newsService: NewsService,
  ) {
  }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.newsService.getNews().subscribe(news => {
      this.news = news;
      this.isLoading = false;
    })
  }
}
