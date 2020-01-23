import { Observable } from 'rxjs';
import { DataTarefaService } from './../../services/data-tarefa.service';
import { TarefaService } from './../../services/tarefa.service';
import { Tarefa } from './../../models/tarefa.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {

  tarefa: Tarefa;
  key = '';
  tarefas: Observable<any[]>;

  constructor(private tarefaService: TarefaService) {

  }

  ngOnInit() {
    this.tarefas = this.tarefaService.getAll();
  }

}
