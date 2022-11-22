import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdministradorModelo } from '../modelos/administrador.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  url: string = 'http://localhost:3000';
  token: string = '';

  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService
  ) {
    this.token = this.seguridadService.obtenerToken();
  }

  getAdministradores(): Observable<AdministradorModelo[]> {
    return this.http.get<AdministradorModelo[]>(`${this.url}/administradores`);
  }

  crearAdministrador(administrador: AdministradorModelo): Observable<AdministradorModelo> {
    return this.http.post<AdministradorModelo>(`${this.url}/administradores`, administrador, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  actualizarAdministrador(administrador: AdministradorModelo): Observable<AdministradorModelo> {
    return this.http.put<AdministradorModelo>(`${this.url}/administradores/${administrador.id}`, administrador, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  getAdministradorXId(id:string): Observable<AdministradorModelo> {
    return this.http.get<AdministradorModelo>(`${this.url}/administradores/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  eliminarAdministrador(id: string): Observable<any> {
    return this.http.delete(`${this.url}/administradores/${id}`, {
      headers:  new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }
}
