import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarServicioComponent } from './buscar-servicio.component';

describe('BuscarServicioComponent', () => {
  let component: BuscarServicioComponent;
  let fixture: ComponentFixture<BuscarServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
