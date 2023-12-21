import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDocenteActualizarComponent } from './crud-docente-actualizar.component';

describe('CrudDocenteActualizarComponent', () => {
  let component: CrudDocenteActualizarComponent;
  let fixture: ComponentFixture<CrudDocenteActualizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudDocenteActualizarComponent]
    });
    fixture = TestBed.createComponent(CrudDocenteActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
