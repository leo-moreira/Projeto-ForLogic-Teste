import { Tarefa } from './../models/tarefa.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataTarefaService {

  private tarefaSource = new BehaviorSubject({tarefa: null, key: ''});
  tarefaAtual = this.tarefaSource.asObservable();

  obtemObjeto(tarefa: Tarefa, key: string) {
    this.tarefaSource.next({
      tarefa ,
      key,
    });
  }

  constructor() { }
}
