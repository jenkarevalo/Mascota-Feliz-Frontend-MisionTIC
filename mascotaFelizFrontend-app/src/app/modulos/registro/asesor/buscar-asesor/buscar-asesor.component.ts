import { Component } from '@angular/core';
import { AsesorModelo } from 'src/app/modelos/asesor.modelo';
import { AsesorService } from 'src/app/servicios/asesor.service';

@Component({
  selector: 'app-buscar-asesor',
  templateUrl: './buscar-asesor.component.html',
  styleUrls: ['./buscar-asesor.component.css']
})
export class BuscarAsesorComponent {
  listadoAsesores: AsesorModelo[] = [];
  
  constructor(
    private asesorService: AsesorService
  ) {
    this.getListadoAsesores();
   }

  ngOnInit(): void {
  }

  getListadoAsesores(){
    this.asesorService.getAsesores()
      .subscribe( (asesores: AsesorModelo[]) => {
        this.listadoAsesores = asesores;
      });
  }
}
