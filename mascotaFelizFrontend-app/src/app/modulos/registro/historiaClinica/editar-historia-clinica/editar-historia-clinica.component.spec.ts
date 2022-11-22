import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHistoriaClinicaComponent } from './editar-historia-clinica.component';

describe('EditarHistoriaClinicaComponent', () => {
  let component: EditarHistoriaClinicaComponent;
  let fixture: ComponentFixture<EditarHistoriaClinicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarHistoriaClinicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarHistoriaClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
