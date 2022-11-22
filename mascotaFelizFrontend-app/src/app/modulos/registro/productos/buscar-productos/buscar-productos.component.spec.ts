import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarProductosComponent } from './buscar-productos.component';

describe('BuscarProductosComponent', () => {
  let component: BuscarProductosComponent;
  let fixture: ComponentFixture<BuscarProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
