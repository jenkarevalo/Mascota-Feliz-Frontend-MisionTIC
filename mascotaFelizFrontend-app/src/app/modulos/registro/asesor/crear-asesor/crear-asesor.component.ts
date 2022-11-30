import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AsesorModelo } from 'src/app/modelos/asesor.modelo';
import { MascotaModelo } from 'src/app/modelos/mascota.modelo';
import { SolicitudModelo } from 'src/app/modelos/solicitud.modelo';
import { AsesorService } from 'src/app/servicios/asesor.service';
import { MascotaService } from 'src/app/servicios/mascota.service';
import { SolicitudService } from 'src/app/servicios/solicitud.service';
const cryptoJS = require('crypto-js');

@Component({
  selector: 'app-crear-asesor',
  templateUrl: './crear-asesor.component.html',
  styleUrls: ['./crear-asesor.component.css']
})
export class CrearAsesorComponent implements OnInit {
  listadoAsesores: SolicitudModelo[] = [];
  listadoPlanes: MascotaModelo[] = [];


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
    private solicitudService: SolicitudService,
    private mascotaService: MascotaService
  ) { }


  ngOnInit(): void {
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
      clave: cryptoJS.MD5(this.formAsesor.controls['Clave'].value).toString(),
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

  /*getSolicitud(){
    this.solicitudService.getSolicitudes()
      .subscribe({
        next: (solicitud) => {
          this.listadoSolicitudes = solicitud;
        },
        error: (error) => console.log("Error al consultar la solicitud")
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
  }*/
}
