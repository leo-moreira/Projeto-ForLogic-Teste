import { Observable } from 'rxjs';
import { TarefaService } from './../../services/tarefa.service';
import { Tarefa } from './../../models/tarefa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vence',
  templateUrl: './vence.component.html',
  styleUrls: ['./vence.component.css']
})
export class VenceComponent implements OnInit {

  tarefa: Tarefa;
  key = '';
  tarefas: Observable<any[]>;

  constructor(private tarefaService: TarefaService) {

  }

  ngOnInit() {
    this.tarefas = this.tarefaService.getAll();
  }

  venceTarefa(tarefa: Tarefa) {
    if (this.tarefaService.inBetween( tarefa.criacao , tarefa.vencimento ) <= 7) {
      console.log('true');
      return true;
    } else {
      console.log('false');
      return false;
    }
  }

}
