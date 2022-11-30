import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteModelo } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { MascotaService } from 'src/app/servicios/mascota.service';
import { PedidosService } from 'src/app/servicios/pedidos.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  id: string = '';

  formClientes: FormGroup = this.formBuilder.group({
    'id': ['', [Validators.required]],
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
     private route: ActivatedRoute,
     private pedidosService: PedidosService,
     private mascotaService: MascotaService
   ) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getCliente();
  }

  guardarClientes() {
    let cliente: ClienteModelo = {
      id: this.formClientes.controls['id'].value,
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
      clave: this.formClientes.controls['Clave'].value,
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

  getCliente(){
    this.clienteService.getClienteXId(this.id)
      .subscribe({
        next: (cliente) => {
          this.formClientes.controls['id'].setValue(cliente.id);
          this.formClientes.controls['PrimerNombre'].setValue(cliente.primerNombre);
          this.formClientes.controls['SegundoNombre'].setValue(cliente.segundoNombre);
          this.formClientes.controls['PrimerApellido'].setValue(cliente.primerApellido);
          this.formClientes.controls['SegundoApellido'].setValue(cliente.segundoApellido);
          this.formClientes.controls['TipoDocumento'].setValue(cliente.tipoDocumento);
          this.formClientes.controls['NumeroDocumento'].setValue(cliente.numeroDocumento);
          this.formClientes.controls['Ciudad'].setValue(cliente.ciudad);
          this.formClientes.controls['Direccion'].setValue(cliente.direccion);
          this.formClientes.controls['Telefono'].setValue(cliente.telefono);
          this.formClientes.controls['Email'].setValue(cliente.email);
          this.formClientes.controls['Clave'].setValue(cliente.clave);
        },
        error: (error) => {
          console.log("error al buscar el cliente")
        }
      });
  }


}
