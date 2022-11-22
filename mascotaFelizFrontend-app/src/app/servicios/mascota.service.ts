import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MascotaModelo } from '../modelos/mascota.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  url: string = 'http://localhost:3000';
  token: string = '';

  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService
  ) {
    this.token = this.seguridadService.obtenerToken();
  }

  getMascotas(): Observable<MascotaModelo[]> {
    return this.http.get<MascotaModelo[]>(`${this.url}/mascotas`);
  }

  crearMascota(mascota: MascotaModelo): Observable<MascotaModelo> {
    return this.http.post<MascotaModelo>(`${this.url}/mascotas`, mascota, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  actualizarMascota(mascota: MascotaModelo): Observable<MascotaModelo> {
    return this.http.put<MascotaModelo>(`${this.url}/mascotas/${mascota.id}`, mascota, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  getMascotaXId(id:string): Observable<MascotaModelo> {
    return this.http.get<MascotaModelo>(`${this.url}/mascotas/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  eliminarMascota(id: string): Observable<any> {
    return this.http.delete(`${this.url}/mascotas/${id}`, {
      headers:  new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }
}
