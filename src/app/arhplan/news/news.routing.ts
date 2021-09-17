import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewingNewsComponent} from "./components/viewing-news/viewing-news.component";
import {NewsPageComponent} from "./components/news-page/news-page.component";

const routes: Routes = [
  {path: '', component: NewsPageComponent},
  {path: 'viewing/:id', component: ViewingNewsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRouting { }
