import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDocenteAdicionarComponent } from './crud-docente-adicionar.component';

describe('CrudDocenteAdicionarComponent', () => {
  let component: CrudDocenteAdicionarComponent;
  let fixture: ComponentFixture<CrudDocenteAdicionarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudDocenteAdicionarComponent]
    });
    fixture = TestBed.createComponent(CrudDocenteAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
