import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPedidosComponent } from './buscar-pedidos.component';

describe('BuscarPedidosComponent', () => {
  let component: BuscarPedidosComponent;
  let fixture: ComponentFixture<BuscarPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
