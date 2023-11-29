import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogadaContratanteComponent } from './logada-contratante.component';

describe('LogadaContratanteComponent', () => {
  let component: LogadaContratanteComponent;
  let fixture: ComponentFixture<LogadaContratanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogadaContratanteComponent]
    });
    fixture = TestBed.createComponent(LogadaContratanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
