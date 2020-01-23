import { DataTarefaService } from './../../services/data-tarefa.service';
import { TarefaService } from './../../services/tarefa.service';
import { Tarefa } from './../../models/tarefa.model';
import { Component, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css'],
  providers: [ DatePipe, ],
})
export class EntradaComponent implements OnInit {

  tarefa: Tarefa;
  key = '';
  tarefas: Observable<any[]>;
  vencimento: Date = new Date();
  criacao: Date;

  formControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(public tarefaService: TarefaService, public tarefaDataService: DataTarefaService, private datePipe: DatePipe) { }

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
      this.tarefa.vencimento = this.vencimento.getTime();
      this.tarefaService.update(this.tarefa, this.key);
    } else {
      this.criacao = new Date(Date.now());
      this.tarefa.criacao = this.criacao.getTime();
      this.tarefa.vencimento = this.vencimento.getTime();
      console.log(this.tarefa.vencimento);
      console.log(this.tarefa.criacao);
      console.log(this.tarefa.vencimento - this.tarefa.criacao);
      this.tarefaService.insert(this.tarefa, this.key);
    }

    this.tarefa = new Tarefa();
    this.key = null;
  }

  toNext(tarefa: Tarefa, key: string) {
    console.log(this.tarefa.vencimento);
    tarefa.isNext = !tarefa.isNext;
    this.tarefaService.next(key, tarefa.isNext);
  }
}
