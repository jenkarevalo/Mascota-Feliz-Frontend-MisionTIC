import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteModelo } from 'src/app/modelos/cliente.modelo';
import { MascotaModelo } from 'src/app/modelos/mascota.modelo';
import { PedidosModelo } from 'src/app/modelos/pedidos.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { MascotaService } from 'src/app/servicios/mascota.service';
import { PedidosService } from 'src/app/servicios/pedidos.service';
const cryptoJS = require('crypto-js');

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  listadoPedidos: PedidosModelo [] = [];
  listadoMascotas: MascotaModelo [] = [];
  

  formClientes: FormGroup = this.formBuilder.group({
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
    'Pedidos': ['', [Validators.required]],
    'Mascota': ['', [Validators.required]],
  });

   constructor(
     private formBuilder: FormBuilder,
     private clienteService: ClienteService,
     private router: Router,
     private pedidosService: PedidosService,
     private mascotaService: MascotaService
   ) { }


  ngOnInit(): void {
  }

  guardarClientes() {
    let cliente: ClienteModelo = {
      primerNombre: this.formClientes.controls['PrimerNombre'].value,
      segundoNombre: this.formClientes.controls['SegundoNombre'].value,
      primerApellido: this.formClientes.controls['PrimerApellido'].value,
      segundoApellido: this.formClientes.controls['SegundoApellido'].value,
      tipoDocumento: this.formClientes.controls['TipoDocumento'].value,
      numeroDocumento: this.formClientes.controls['NumeroDocumento'].value,
      ciudad: this.formClientes.controls['Ciudad'].value,
      direccion: this.formClientes.controls['Direccion'].value,
      telefono: this.formClientes.controls['Telefono'].value,
      email: this.formClientes.controls['Email'].value,
      clave: cryptoJS.MD5(this.formClientes.controls['Clave'].value).toString(),
      pedidosId: this.formClientes.controls['Pedidos'].value,
      mascotaId: this.formClientes.controls['Mascota'].value,
    }
    this.clienteService.crearCliente(cliente)
      .subscribe({
        next: (datos) => {
          this.router.navigate(['/registro/cliente/buscar-Cliente']);
        },
        error: (error) => {
          console.log("Error al guardar el cliente");
        }
      });
  }

  getPedidos(){
    this.pedidosService.getPedidos()
      .subscribe({
        next: (pedidos) => {
          this.listadoPedidos = pedidos;
        },
        error: (error) => console.log("Error al consultar los pedidos")
      })
  }

  getMascota(){
    this.mascotaService.getMascotas()
      .subscribe({
        next: (mascota) => {
          this.listadoMascotas = mascota;
        },
        error: (error) => console.log("Error al consultar las mascotas")
      })
  }

}
