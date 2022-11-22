import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarHistoriaClinicaComponent } from './buscar-historia-clinica.component';

describe('BuscarHistoriaClinicaComponent', () => {
  let component: BuscarHistoriaClinicaComponent;
  let fixture: ComponentFixture<BuscarHistoriaClinicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarHistoriaClinicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarHistoriaClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
