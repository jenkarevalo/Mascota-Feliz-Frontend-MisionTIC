import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductosModelo } from '../modelos/productos.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url: string = 'http://localhost:3000';
  token: string = '';

  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService
  ) {
    this.token = this.seguridadService.obtenerToken();
  }

  getProductos(): Observable<ProductosModelo[]> {
    return this.http.get<ProductosModelo[]>(`${this.url}/productos`);
  }

  crearProductos(productos: ProductosModelo): Observable<ProductosModelo> {
    return this.http.post<ProductosModelo>(`${this.url}/productos`, productos, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  actualizarProductos(productos: ProductosModelo): Observable<ProductosModelo> {
    return this.http.put<ProductosModelo>(`${this.url}/productos/${productos.id}`, productos, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  getProductosXId(id:string): Observable<ProductosModelo> {
    return this.http.get<ProductosModelo>(`${this.url}/productos/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  eliminarProductos(id: string): Observable<any> {
    return this.http.delete(`${this.url}/productos/${id}`, {
      headers:  new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }
}
