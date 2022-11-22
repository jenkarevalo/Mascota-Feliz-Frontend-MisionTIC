import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioModelo } from '../modelos/servicio.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ServcioService {
  url: string = 'http://localhost:3000';
  token: string = '';

  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService
  ) {
    this.token = this.seguridadService.obtenerToken();
  }

  getServicios(): Observable<ServicioModelo[]> {
    return this.http.get<ServicioModelo[]>(`${this.url}/servicios`);
  }

  crearServicio(servicio: ServicioModelo): Observable<ServicioModelo> {
    return this.http.post<ServicioModelo>(`${this.url}/servicios`, servicio, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  actualizarServicio(servicio: ServicioModelo): Observable<ServicioModelo> {
    return this.http.put<ServicioModelo>(`${this.url}/servicios/${servicio.id}`, servicio, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  getServicioXId(id:string): Observable<ServicioModelo> {
    return this.http.get<ServicioModelo>(`${this.url}/servicios/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  eliminarServicio(id: string): Observable<any> {
    return this.http.delete(`${this.url}/servicios/${id}`, {
      headers:  new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }
}
