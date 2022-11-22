import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdministradorModelo } from 'src/app/modelos/administrador.modelo';
import { AsesorModelo } from 'src/app/modelos/asesor.modelo';
import { PlanModelo } from 'src/app/modelos/plan.modelo';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import { AsesorService } from 'src/app/servicios/asesor.service';
import { PlanService } from 'src/app/servicios/plan.service';
const cryptoJS = require('crypto-js');

@Component({
  selector: 'app-crear-administrador',
  templateUrl: './crear-administrador.component.html',
  styleUrls: ['./crear-administrador.component.css']
})
export class CrearAdministradorComponent {
  listadoAsesores: AsesorModelo [] = [];
  listadoPlanes: PlanModelo[] =[];
  

  formAdministrador: FormGroup = this.formBuilder.group({
    'PrimerNombre': ['', [Validators.required]],
    'SegundoNombre': ['', [Validators.required]],
    'PrimerApellido': ['', [Validators.required]],
    'SegundoApellido': ['', [Validators.required]],
    'TipoDocumento': ['', [Validators.required]],
    'NumeroDocumento': ['', [Validators.required]],
    'Ciudad': ['', [Validators.required]],
    'Direccion': ['', [Validators.required]],
    'Telefono': ['', [Validators.required]],
    'Email': ['', [Validators.required]],
    'Clave': ['', [Validators.required]],
    'AsesorId': ['', [Validators.required]],
    'PlanId': ['', [Validators.required]],
  });

   constructor(
     private formBuilder: FormBuilder,
     private administradorService: AdministradorService,
     private router: Router,
     private asesorService: AsesorService,
     private planService: PlanService
   ) { }


  ngOnInit(): void {
  }

  guardarAdministrador() {
    let administrador: AdministradorModelo = {
      primerNombre: this.formAdministrador.controls['PrimerNombre'].value,
      segundoNombre: this.formAdministrador.controls['SegundoNombre'].value,
      primerApellido: this.formAdministrador.controls['PrimerApellido'].value,
      segundoApellido: this.formAdministrador.controls['SegundoApellido'].value,
      tipoDocumento: this.formAdministrador.controls['TipoDocumento'].value,
      numeroDocumento: this.formAdministrador.controls['NumeroDocumento'].value,
      ciudad: this.formAdministrador.controls['Ciudad'].value,
      direccion: this.formAdministrador.controls['Direccion'].value,
      telefono: this.formAdministrador.controls['Telefono'].value,
      email: this.formAdministrador.controls['Email'].value,
      clave: cryptoJS.MD5(this.formAdministrador.controls['Clave'].value).toString(),
      asesorId: this.formAdministrador.controls['AsesorId'].value,
      planId: this.formAdministrador.controls['PlanId'].value,
    }
    this.administradorService.crearAdministrador(administrador)
      .subscribe({
        next: (datos) => {
          this.router.navigate(['/registro/administrador/buscar-Administrador']);
        },
        error: (error) => {
          console.log("Error al guardar el administrador");
        }
      });
  }

  getAsesor(){
    this.asesorService.getAsesores()
      .subscribe({
        next: (asesor) => {
          this.listadoAsesores = asesor;
        },
        error: (error) => console.log("Error al consultar el asesor")
      })
  }

  getPlan(){
    this.planService.getPlan()
      .subscribe({
        next: (plan) => {
          this.listadoPlanes = plan;
        },
        error: (error) => console.log("Error al consultar el plan")
      })
  }
}
