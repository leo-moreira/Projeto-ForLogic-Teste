import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { AngularFireDatabase } from '@angular/fire/database';
import { Tarefa } from './../models/tarefa.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { toInt } from 'ngx-bootstrap/chronos/utils/type-checks';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {


  // tslint:disable-next-line: variable-name
  constructor(private _angularFireDatabase: AngularFireDatabase) { }

  insert(tarefa: Tarefa, key: string) {
    this._angularFireDatabase.list('tarefas').push(tarefa);
  }

  update(tarefa, key) {
    this._angularFireDatabase.list(`tarefas`).update(key, tarefa);
  }

  getAll() {
    return this._angularFireDatabase.list(`tarefas`)
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(data => {
            return { key: data.payload.key, ...data.payload.val() };
          });
        })
      );
  }


  delete(key: string) {
    this._angularFireDatabase.object(`tarefas/${key}`).remove();
  }

  next(key: string, next: boolean) {
    this._angularFireDatabase.list(`tarefas`).update(key, { isNext: next });
  }

  inBetween(date1, date2 ) {
    // Get 1 day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    const date1ms = date1;
    const date2ms = date2;

    // Calculate the difference in milliseconds
    const differenceMs = date2ms - date1ms;

    // Convert back to days and return
    return Math.round( differenceMs / oneDay);
  }
}
