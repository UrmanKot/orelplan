import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Observable} from "rxjs";
import {map, take} from "rxjs/operators";
import {News} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private db: AngularFireDatabase,
  ) { }

  getNews(): Observable<News[]> {
    return this.db.list('news').snapshotChanges().pipe(
      map(news =>
        news.map(n => ({
          id: n.payload.key,
          // @ts-ignore
          ...n.payload.val()
        }))
      ),
      map((news) => news.sort((a: News, b: News) => new Date(b.date).getTime() - new Date(a.date).getTime())),
    );
  }
}
