import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SolicitudModelo } from '../modelos/solicitud.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  url: string = 'http://localhost:3000';
  token: string = '';

  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService
  ) {
    this.token = this.seguridadService.obtenerToken();
  }

  getSolicitudes(): Observable<SolicitudModelo[]> {
    return this.http.get<SolicitudModelo[]>(`${this.url}/solicitudes`);
  }

  crearSolicitud(solicitud: SolicitudModelo): Observable<SolicitudModelo> {
    return this.http.post<SolicitudModelo>(`${this.url}/solicitudes`, solicitud, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  actualizarSolicitud(solicitud: SolicitudModelo): Observable<SolicitudModelo> {
    return this.http.put<SolicitudModelo>(`${this.url}/solicitudes/${solicitud.id}`, solicitud, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  getSolicitudXId(id:string): Observable<SolicitudModelo> {
    return this.http.get<SolicitudModelo>(`${this.url}/solicitudes/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  eliminarSolicitud(id: string): Observable<any> {
    return this.http.delete(`${this.url}/solicitudes/${id}`, {
      headers:  new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }
}
