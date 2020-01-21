import { AngularFireDatabase } from '@angular/fire/database';
import { Tarefa } from './../models/tarefa.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  // tslint:disable-next-line: variable-name
  constructor(private _angularFireDatabase: AngularFireDatabase) { }

  insert(tarefa: Tarefa) {
    tarefa.criacao = Date.now();
    this._angularFireDatabase.list('tarefas').push(tarefa);
  }

  update(tarefa: Tarefa, key: string) {
    this._angularFireDatabase.list('tarefas').update(key, tarefa);
  }

  getAll() {
    return this._angularFireDatabase.list('tarefas')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(data => {
            return  {key: data.payload.key, ...data.payload.val() };
          });
        })
      );
  }


  delete(key: string) {
    this._angularFireDatabase.object(`tarefas/${key}`).remove();
  }

  next(key: string, next: boolean) {
    this._angularFireDatabase.list('tarefas').update(key, {isNext: next}) ;
  }
}
