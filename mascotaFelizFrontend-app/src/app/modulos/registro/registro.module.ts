import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { CrearAdministradorComponent } from './administrador/crear-administrador/crear-administrador.component';
import { BuscarAdministradorComponent } from './administrador/buscar-administrador/buscar-administrador.component';
import { EditarAdministradorComponent } from './administrador/editar-administrador/editar-administrador.component';
import { EditarAsesorComponent } from './asesor/editar-asesor/editar-asesor.component';
import { CrearAsesorComponent } from './asesor/crear-asesor/crear-asesor.component';
import { BuscarAsesorComponent } from './asesor/buscar-asesor/buscar-asesor.component';
import { BuscarClienteComponent } from './cliente/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { EditarHistoriaClinicaComponent } from './historiaClinica/editar-historia-clinica/editar-historia-clinica.component';
import { CrearHistoriaClinicaComponent } from './historiaClinica/crear-historia-clinica/crear-historia-clinica.component';
import { BuscarHistoriaClinicaComponent } from './historiaClinica/buscar-historia-clinica/buscar-historia-clinica.component';
import { BuscarMascotaComponent } from './mascota/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascota/editar-mascota/editar-mascota.component';
import { EditarPedidosComponent } from './pedidos/editar-pedidos/editar-pedidos.component';
import { CrearPedidosComponent } from './pedidos/crear-pedidos/crear-pedidos.component';
import { BuscarPedidosComponent } from './pedidos/buscar-pedidos/buscar-pedidos.component';
import { BuscarPlanComponent } from './plan/buscar-plan/buscar-plan.component';
import { CrearPlanComponent } from './plan/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './plan/editar-plan/editar-plan.component';
import { EditarProductosComponent } from './productos/editar-productos/editar-productos.component';
import { CrearProductosComponent } from './productos/crear-productos/crear-productos.component';
import { BuscarProductosComponent } from './productos/buscar-productos/buscar-productos.component';
import { BuscarServicioComponent } from './servicio/buscar-servicio/buscar-servicio.component';
import { CrearServicioComponent } from './servicio/crear-servicio/crear-servicio.component';
import { EditarServicioComponent } from './servicio/editar-servicio/editar-servicio.component';
import { EditarSolicitudComponent } from './solicitud/editar-solicitud/editar-solicitud.component';
import { CrearSolicitudComponent } from './solicitud/crear-solicitud/crear-solicitud.component';
import { BuscarSolicitudComponent } from './solicitud/buscar-solicitud/buscar-solicitud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearAdministradorComponent,
    BuscarAdministradorComponent,
    EditarAdministradorComponent,
    EditarAsesorComponent,
    CrearAsesorComponent,
    BuscarAsesorComponent,
    BuscarClienteComponent,
    CrearClienteComponent,
    EditarClienteComponent,
    EditarHistoriaClinicaComponent,
    CrearHistoriaClinicaComponent,
    BuscarHistoriaClinicaComponent,
    BuscarMascotaComponent,
    CrearMascotaComponent,
    EditarMascotaComponent,
    EditarPedidosComponent,
    CrearPedidosComponent,
    BuscarPedidosComponent,
    BuscarPlanComponent,
    CrearPlanComponent,
    EditarPlanComponent,
    EditarProductosComponent,
    CrearProductosComponent,
    BuscarProductosComponent,
    BuscarServicioComponent,
    CrearServicioComponent,
    EditarServicioComponent,
    EditarSolicitudComponent,
    CrearSolicitudComponent,
    BuscarSolicitudComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegistroModule { }
