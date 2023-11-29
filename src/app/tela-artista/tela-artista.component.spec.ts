import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaArtistaComponent } from './tela-artista.component';

describe('TelaArtistaComponent', () => {
  let component: TelaArtistaComponent;
  let fixture: ComponentFixture<TelaArtistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaArtistaComponent]
    });
    fixture = TestBed.createComponent(TelaArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
