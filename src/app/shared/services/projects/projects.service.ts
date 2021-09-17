import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Observable} from "rxjs";
import {News} from "../../interfaces";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(
    private db: AngularFireDatabase,
  ) { }

  getProjects(): Observable<News[]> {
    return this.db.list('projects').snapshotChanges().pipe(
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
