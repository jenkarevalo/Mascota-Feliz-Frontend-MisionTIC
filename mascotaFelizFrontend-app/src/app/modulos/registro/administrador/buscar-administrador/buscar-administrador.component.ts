import { Component, OnInit } from '@angular/core';
import { AdministradorModelo } from 'src/app/modelos/administrador.modelo';
import { AdministradorService } from 'src/app/servicios/administrador.service';

@Component({
  selector: 'app-buscar-administrador',
  templateUrl: './buscar-administrador.component.html',
  styleUrls: ['./buscar-administrador.component.css']
})
export class BuscarAdministradorComponent implements OnInit {
  listadoAdministradores: AdministradorModelo[] = [];
  
  constructor(
    private administradorService: AdministradorService
  ) {
    this.getListadoAdministradores();
   }

  ngOnInit(): void {
  }

  getListadoAdministradores(){
    this.administradorService.getAdministradores()
      .subscribe( (administradores: AdministradorModelo[]) => {
        this.listadoAdministradores = administradores;
      });
  }
}
