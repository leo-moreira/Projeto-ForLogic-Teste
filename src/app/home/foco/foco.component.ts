import { Observable } from 'rxjs';
import { Tarefa } from './../../models/tarefa.model';
import { TarefaService } from './../../services/tarefa.service';
import { DataTarefaService } from './../../services/data-tarefa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foco',
  templateUrl: './foco.component.html',
  styleUrls: ['./foco.component.css']
})
export class FocoComponent implements OnInit {

  tarefa: Tarefa;
  key = '';
  tarefas: Observable<any[]>;

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.tarefaService.getAll();
  }

}
