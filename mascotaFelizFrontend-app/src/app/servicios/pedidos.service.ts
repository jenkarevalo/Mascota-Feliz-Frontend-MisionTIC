import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PedidosModelo } from '../modelos/pedidos.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  url: string = 'http://localhost:3000';
  token: string = '';

  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService
  ) {
    this.token = this.seguridadService.obtenerToken();
  }

  getPedidos(): Observable<PedidosModelo[]> {
    return this.http.get<PedidosModelo[]>(`${this.url}/pedidos`);
  }

  crearPedidos(pedidos: PedidosModelo): Observable<PedidosModelo> {
    return this.http.post<PedidosModelo>(`${this.url}/pedidos`, pedidos, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  actualizarPedidos(pedidos: PedidosModelo): Observable<PedidosModelo> {
    return this.http.put<PedidosModelo>(`${this.url}/pedidos/${pedidos.id}`, pedidos, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  getPedidosXId(id:string): Observable<PedidosModelo> {
    return this.http.get<PedidosModelo>(`${this.url}/pedidos/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  eliminarPedidos(id: string): Observable<any> {
    return this.http.delete(`${this.url}/pedidos/${id}`, {
      headers:  new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }
}
