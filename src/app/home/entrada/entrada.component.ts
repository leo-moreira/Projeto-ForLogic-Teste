import { DataTarefaService } from './../../services/data-tarefa.service';
import { TarefaService } from './../../services/tarefa.service';
import { Tarefa } from './../../models/tarefa.model';
import { Component, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';


@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  tarefa: Tarefa;
  key = '';
  tarefas: Observable<any[]>;

  formControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(private tarefaService: TarefaService, private tarefaDataService: DataTarefaService) { }

  ngOnInit() {
    this.tarefa = new Tarefa();
    this.tarefaDataService.tarefaAtual.subscribe(data => {
      if (data.tarefa && data.key) {
        this.tarefa = new Tarefa();
        this.tarefa.title = data.tarefa.title;
        this.tarefa.descricao = data.tarefa.descricao;
        this.tarefa.vencimento = data.tarefa.vencimento;
        this.tarefa.criacao = data.tarefa.criacao;
        this.tarefa.foco = data.tarefa.foco;
        this.key = data.key;
      }
    });

    this.tarefas = this.tarefaService.getAll();
  }

  delete(key: string) {
    this.tarefaService.delete(key);
  }

  edit(tarefa: Tarefa, key: string) {
    this.tarefaDataService.obtemObjeto(tarefa, key);
  }

  onSubmit() {
    if (this.key) {
      this.tarefaService.update(this.tarefa, this.key);
    } else {
      this.tarefaService.insert(this.tarefa);
    }

    this.tarefa = new Tarefa();
    this.key = null;
  }

  toNext(tarefa: Tarefa, key: string) {
    tarefa.isNext = !tarefa.isNext;
    this.tarefaService.next(key, tarefa.isNext);
  }

}
