import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginModelo } from 'src/app/modelos/login.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  seInicioSesion: boolean = false;
  subs: Subscription = new Subscription();

  constructor(
  private seguridadService: SeguridadService,
  private route: Router
  ){ }

  ngOnInit(): void {
    console.log(`En Sesion ${this.seInicioSesion}`);
    this.subs = this.seguridadService.getDatosUsuarioEnSesion()
      .subscribe((datos: LoginModelo) => {
        this.seInicioSesion = datos.enSesion != null ? datos.enSesion: false;
        this.route.navigate(["/administrador/buscar-Administrador"]);
        this.route.navigate(["/asesor/buscar-Asesor"]);
        this.route.navigate(["/cliente/buscar-Cliente"]);
      });
  }

  cerrarSesion(){
    this.seguridadService.eliminarSesion();
    this.seInicioSesion = false;
    this.route.navigate(['/inicio']);
  }
}
