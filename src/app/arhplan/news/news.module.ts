import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRouting } from './news.routing';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { ViewingNewsComponent } from './components/viewing-news/viewing-news.component';
import {QuillModule} from "ngx-quill";


@NgModule({
  declarations: [
    NewsPageComponent,
    ViewingNewsComponent
  ],
  exports: [
    NewsPageComponent
  ],
    imports: [
        CommonModule,
        NewsRouting,
        QuillModule
    ]
})
export class NewsModule { }
