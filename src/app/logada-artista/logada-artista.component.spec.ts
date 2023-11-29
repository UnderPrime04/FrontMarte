import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogadaArtistaComponent } from './logada-artista.component';

describe('LogadaArtistaComponent', () => {
  let component: LogadaArtistaComponent;
  let fixture: ComponentFixture<LogadaArtistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogadaArtistaComponent]
    });
    fixture = TestBed.createComponent(LogadaArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
