import { Tarefa } from './../models/tarefa.model';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NextTarefasService {

  public database: AngularFireList<Tarefa>;

  tarefas: Tarefa[];

  constructor(private firebasedb: AngularFireDatabase) {
  }

  addTarefa(titleTask: string, descricaoTask: string, vencimentoTask: number, focoTask: boolean) {
    this.database.push({
      title: titleTask,
      descricao: descricaoTask,
      vencimento: vencimentoTask,
      criacao: Date.now(),
      foco: focoTask,
    });
  }

  getTask() {
    this.database = this.firebasedb.list('nextTarefas');
    return this.database;
  }
}
