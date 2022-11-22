import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPedidosComponent } from './crear-pedidos.component';

describe('CrearPedidosComponent', () => {
  let component: CrearPedidosComponent;
  let fixture: ComponentFixture<CrearPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
