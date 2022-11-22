import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdministradorModelo } from 'src/app/modelos/administrador.modelo';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import { AsesorService } from 'src/app/servicios/asesor.service';
import { PlanService } from 'src/app/servicios/plan.service';

@Component({
  selector: 'app-editar-administrador',
  templateUrl: './editar-administrador.component.html',
  styleUrls: ['./editar-administrador.component.css']
})
export class EditarAdministradorComponent {
  id: string = '';  

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
      clave: this.formAdministrador.controls['Clave'].value,
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
  
  getAdministrador(){
    this.administradorService.getAdministradorXId(this.id)
      .subscribe({
        next: (administrador) => {
          this.formAdministrador.controls['id'].setValue(administrador.id);
          this.formAdministrador.controls['PrimerNombre'].setValue(administrador.primerNombre);
          this.formAdministrador.controls['SegundoNombre'].setValue(administrador.segundoNombre);
          this.formAdministrador.controls['PrimerApellido'].setValue(administrador.primerApellido);
          this.formAdministrador.controls['SegundoApellido'].setValue(administrador.segundoApellido);
          this.formAdministrador.controls['TipoDocumento'].setValue(administrador.tipoDocumento);
          this.formAdministrador.controls['NumeroDocumento'].setValue(administrador.numeroDocumento);
          this.formAdministrador.controls['Ciudad'].setValue(administrador.ciudad);
          this.formAdministrador.controls['Direccion'].setValue(administrador.direccion);
          this.formAdministrador.controls['Telefono'].setValue(administrador.telefono);
          this.formAdministrador.controls['Email'].setValue(administrador.email);
          this.formAdministrador.controls['Clave'].setValue(administrador.clave);
          this.formAdministrador.controls['AsesorId'].setValue(administrador.asesorId);
          this.formAdministrador.controls['PlanId'].setValue(administrador.planId);
        },
        error: (error) => {
          console.log("error al buscar el administrador")
        }
      });
  }
}
