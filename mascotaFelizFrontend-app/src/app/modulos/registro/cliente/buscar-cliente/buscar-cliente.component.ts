import { Component, OnInit } from '@angular/core';
import { ClienteModelo } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.css']
})
export class BuscarClienteComponent implements OnInit {
  listadoClientes: ClienteModelo[] = [];
  
  constructor(
    private clienteService: ClienteService
  ) {
    this.getListadoClientes();
   }

  ngOnInit(): void {
  }

  getListadoClientes(){
    this.clienteService.getClientes()
      .subscribe( (clientes: ClienteModelo[]) => {
        this.listadoClientes = clientes;
      });
  }

}
