import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.css']
})
export class CerrarSesionComponent {

  constructor(
    private seguridadService: SeguridadService,
    private route: Router
    ) {}

  ngOnInit(): void {
    this.seguridadService.eliminarSesion();
    this.route.navigate(['/inicio'])
  }

}
