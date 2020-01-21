import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenceComponent } from './vence.component';

describe('VenceComponent', () => {
  let component: VenceComponent;
  let fixture: ComponentFixture<VenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
