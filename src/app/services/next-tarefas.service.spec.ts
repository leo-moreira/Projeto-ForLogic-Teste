import { TestBed } from '@angular/core/testing';

import { NextTarefasService } from './next-tarefas.service';

describe('NextTarefasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NextTarefasService = TestBed.get(NextTarefasService);
    expect(service).toBeTruthy();
  });
});
