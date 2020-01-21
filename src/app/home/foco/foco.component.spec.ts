import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocoComponent } from './foco.component';

describe('FocoComponent', () => {
  let component: FocoComponent;
  let fixture: ComponentFixture<FocoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
