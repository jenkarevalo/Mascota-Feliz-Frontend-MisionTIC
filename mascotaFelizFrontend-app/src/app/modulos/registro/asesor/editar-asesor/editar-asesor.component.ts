import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AsesorModelo } from 'src/app/modelos/asesor.modelo';
import { AsesorService } from 'src/app/servicios/asesor.service';
import { MascotaService } from 'src/app/servicios/mascota.service';
import { SolicitudService } from 'src/app/servicios/solicitud.service';

@Component({
  selector: 'app-editar-asesor',
  templateUrl: './editar-asesor.component.html',
  styleUrls: ['./editar-asesor.component.css']
})

export class EditarAsesorComponent {
  id: string = '';

  formAsesor: FormGroup = this.formBuilder.group({
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
    'SolicitudId': ['', [Validators.required]],
    'MascotaId': ['', [Validators.required]],
  });

   constructor(
     private formBuilder: FormBuilder,
     private asesorService: AsesorService,
     private router: Router,
     private route: ActivatedRoute,
     private solicitudService: SolicitudService,
     private mascotaService: MascotaService
   ) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getHabitante();
  }

  guardarAsesor() {
    let asesor: AsesorModelo = {
      primerNombre: this.formAsesor.controls['PrimerNombre'].value,
      segundoNombre: this.formAsesor.controls['SegundoNombre'].value,
      primerApellido: this.formAsesor.controls['PrimerApellido'].value,
      segundoApellido: this.formAsesor.controls['SegundoApellido'].value,
      tipoDocumento: this.formAsesor.controls['TipoDocumento'].value,
      numeroDocumento: this.formAsesor.controls['NumeroDocumento'].value,
      ciudad: this.formAsesor.controls['Ciudad'].value,
      direccion: this.formAsesor.controls['Direccion'].value,
      telefono: this.formAsesor.controls['Telefono'].value,
      email: this.formAsesor.controls['Email'].value,
      clave: this.formAsesor.controls['Clave'].value,
      solicitudId: this.formAsesor.controls['SolicitudId'].value,
      mascotaId: this.formAsesor.controls['MascotaId'].value,
    }
    this.asesorService.crearAsesor(asesor)
      .subscribe({
        next: (datos) => {
          this.router.navigate(['/registro/asesor/buscar-Asesor']);
        },
        error: (error) => {
          console.log("Error al guardar el asesor");
        }
      });
  }

  getHabitante(){
    this.asesorService.getAsesorXId(this.id)
      .subscribe({
        next: (asesor) => {
          this.formAsesor.controls['id'].setValue(asesor.id);
          this.formAsesor.controls['PrimerNombre'].setValue(asesor.primerNombre);
          this.formAsesor.controls['SegundoNombre'].setValue(asesor.segundoNombre);
          this.formAsesor.controls['PrimerApellido'].setValue(asesor.primerApellido);
          this.formAsesor.controls['SegundoApellido'].setValue(asesor.segundoApellido);
          this.formAsesor.controls['Documento'].setValue(asesor.tipoDocumento);
          this.formAsesor.controls['Documento'].setValue(asesor.numeroDocumento);
          this.formAsesor.controls['Telefono'].setValue(asesor.ciudad);
          this.formAsesor.controls['Telefono'].setValue(asesor.direccion);
          this.formAsesor.controls['Telefono'].setValue(asesor.telefono);
          this.formAsesor.controls['Email'].setValue(asesor.email);
          this.formAsesor.controls['Clave'].setValue(asesor.clave);
        },
        error: (error) => {
          console.log("error al buscar el asesor")
        }
      });
  }
}
