import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteModelo } from '../modelos/cliente.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url: string = 'http://localhost:3000';
  token: string = '';

  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService
  ) {
    this.token = this.seguridadService.obtenerToken();
  }

  getClientes(): Observable<ClienteModelo[]> {
    return this.http.get<ClienteModelo[]>(`${this.url}/clientes`);
  }

  crearCliente(cliente: ClienteModelo): Observable<ClienteModelo> {
    return this.http.post<ClienteModelo>(`${this.url}/clientes`, cliente, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  actualizarCliente(cliente: ClienteModelo): Observable<ClienteModelo> {
    return this.http.put<ClienteModelo>(`${this.url}/clientes/${cliente.id}`, cliente, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  getClienteXId(id:string): Observable<ClienteModelo> {
    return this.http.get<ClienteModelo>(`${this.url}/clientes/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  eliminarCliente(id: string): Observable<any> {
    return this.http.delete(`${this.url}/clientes/${id}`, {
      headers:  new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }
}
