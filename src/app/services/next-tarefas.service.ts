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
}
