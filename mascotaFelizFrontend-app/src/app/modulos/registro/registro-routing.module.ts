import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarAdministradorComponent } from './administrador/buscar-administrador/buscar-administrador.component';
import { CrearAdministradorComponent } from './administrador/crear-administrador/crear-administrador.component';
import { EditarAdministradorComponent } from './administrador/editar-administrador/editar-administrador.component';
import { BuscarAsesorComponent } from './asesor/buscar-asesor/buscar-asesor.component';
import { CrearAsesorComponent } from './asesor/crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from './asesor/editar-asesor/editar-asesor.component';
import { BuscarClienteComponent } from './cliente/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { BuscarHistoriaClinicaComponent } from './historiaClinica/buscar-historia-clinica/buscar-historia-clinica.component';
import { CrearHistoriaClinicaComponent } from './historiaClinica/crear-historia-clinica/crear-historia-clinica.component';
import { EditarHistoriaClinicaComponent } from './historiaClinica/editar-historia-clinica/editar-historia-clinica.component';
import { BuscarMascotaComponent } from './mascota/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascota/editar-mascota/editar-mascota.component';
import { BuscarPedidosComponent } from './pedidos/buscar-pedidos/buscar-pedidos.component';
import { CrearPedidosComponent } from './pedidos/crear-pedidos/crear-pedidos.component';
import { EditarPedidosComponent } from './pedidos/editar-pedidos/editar-pedidos.component';
import { BuscarPlanComponent } from './plan/buscar-plan/buscar-plan.component';
import { CrearPlanComponent } from './plan/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './plan/editar-plan/editar-plan.component';
import { BuscarProductosComponent } from './productos/buscar-productos/buscar-productos.component';
import { CrearProductosComponent } from './productos/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './productos/editar-productos/editar-productos.component';
import { BuscarServicioComponent } from './servicio/buscar-servicio/buscar-servicio.component';
import { CrearServicioComponent } from './servicio/crear-servicio/crear-servicio.component';
import { EditarServicioComponent } from './servicio/editar-servicio/editar-servicio.component';
import { BuscarSolicitudComponent } from './solicitud/buscar-solicitud/buscar-solicitud.component';
import { CrearSolicitudComponent } from './solicitud/crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './solicitud/editar-solicitud/editar-solicitud.component';

const routes: Routes = [
  {
    path: "crear-Administrador",
     component: CrearAdministradorComponent
   },
  {
    path: "editar-Administrador/:id",
    component: EditarAdministradorComponent
  },
  {
    path: "administrador/buscar-Administrador",
    component: BuscarAdministradorComponent
  },
  {
    path: "crear-Asesor",
     component: CrearAsesorComponent
   },
  {
    path: "editar-Asesor/:id",
    component: EditarAsesorComponent
  },
  {
    path: "asesor/buscar-Asesor",
    component: BuscarAsesorComponent
  },
  {
    path: "crear-Cliente",
     component: CrearClienteComponent
   },
  {
    path: "editar-Cliente/:id",
    component: EditarClienteComponent
  },
  {
    path: "cliente/buscar-Cliente",
    component: BuscarClienteComponent
  },
  {
    path: "crear-HistoriaClinica",
     component: CrearHistoriaClinicaComponent
   },
  {
    path: "editar-HistoriaClinica/:id",
    component: EditarHistoriaClinicaComponent
  },
  {
    path: "historiaClinica/buscar-HistoriaClinica",
    component: BuscarHistoriaClinicaComponent
  },
  {
    path: "crear-Mascota",
     component: CrearMascotaComponent
   },
  {
    path: "editar-Mascota/:id",
    component: EditarMascotaComponent
  },
  {
    path: "mascota/buscar-Mascota",
    component: BuscarMascotaComponent
  },
  {
    path: "crear-Pedidos",
     component: CrearPedidosComponent
   },
  {
    path: "editar-Pedidos/:id",
    component: EditarPedidosComponent
  },
  {
    path: "pedidos/buscar-Pedidos",
    component: BuscarPedidosComponent
  },
  {
    path: "crear-Plan",
     component: CrearPlanComponent
   },
  {
    path: "editar-Plan/:id",
    component: EditarPlanComponent
  },
  {
    path: "plan/buscar-Plan",
    component: BuscarPlanComponent
  },
  {
    path: "crear-Productos",
     component: CrearProductosComponent
   },
  {
    path: "editar-Productos/:id",
    component: EditarProductosComponent
  },
  {
    path: "productos/buscar-Productos",
    component: BuscarProductosComponent
  },
  {
    path: "crear-Servicio",
     component: CrearServicioComponent
   },
  {
    path: "editar-Servicio/:id",
    component: EditarServicioComponent
  },
  {
    path: "servicio/buscar-Servicio",
    component: BuscarServicioComponent
  },
  {
    path: "crear-Solicitud",
     component: CrearSolicitudComponent
   },
  {
    path: "editar-Solicitud/:id",
    component: EditarSolicitudComponent
  },
  {
    path: "solicitud/buscar-Solicitud",
    component: BuscarSolicitudComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
