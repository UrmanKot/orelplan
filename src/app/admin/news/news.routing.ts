import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsListComponent} from './components/news-list/news-list.component';
import {CreateNewsComponent} from './components/create-news/create-news.component';
import {EditNewsComponent} from './components/edit-news/edit-news.component';

const routes: Routes = [
  {path: '', component: NewsListComponent},
  {path: 'create', component: CreateNewsComponent},
  {path: 'edit/:id', component: EditNewsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRouting {
}
