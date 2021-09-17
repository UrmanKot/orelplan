import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRouting } from './news.routing';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { EditNewsComponent } from './components/edit-news/edit-news.component'


@NgModule({
  declarations: [
    CreateNewsComponent,
    NewsListComponent,
    EditNewsComponent,
  ],
  imports: [
    CommonModule,
    NewsRouting,
    SharedModule,
    ReactiveFormsModule,
    QuillModule
  ]
})
export class NewsModule { }
