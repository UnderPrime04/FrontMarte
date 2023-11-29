import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPerfilContratanteComponent } from './tela-perfil-contratante.component';

describe('TelaPerfilContratanteComponent', () => {
  let component: TelaPerfilContratanteComponent;
  let fixture: ComponentFixture<TelaPerfilContratanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaPerfilContratanteComponent]
    });
    fixture = TestBed.createComponent(TelaPerfilContratanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
