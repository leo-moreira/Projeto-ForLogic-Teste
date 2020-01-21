import { TestBed } from '@angular/core/testing';

import { DataTarefaService } from './data-tarefa.service';

describe('DataTarefaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataTarefaService = TestBed.get(DataTarefaService);
    expect(service).toBeTruthy();
  });
});
