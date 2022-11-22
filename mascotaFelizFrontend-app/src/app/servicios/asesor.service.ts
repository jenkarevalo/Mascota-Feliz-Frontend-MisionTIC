import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AsesorModelo } from '../modelos/asesor.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AsesorService {
  url: string = 'http://localhost:3000';
  token: string = '';

  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService
  ) {
    this.token = this.seguridadService.obtenerToken();
  }

  getAsesores(): Observable<AsesorModelo[]> {
    return this.http.get<AsesorModelo[]>(`${this.url}/asesores`);
  }

  crearAsesor(asesor: AsesorModelo): Observable<AsesorModelo> {
    return this.http.post<AsesorModelo>(`${this.url}/asesores`, asesor, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  actualizarAsesor(asesor: AsesorModelo): Observable<AsesorModelo> {
    return this.http.put<AsesorModelo>(`${this.url}/asesores/${asesor.id}`, asesor, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  getAsesorXId(id:string): Observable<AsesorModelo> {
    return this.http.get<AsesorModelo>(`${this.url}/asesores/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  eliminarAsesor(id: string): Observable<any> {
    return this.http.delete(`${this.url}/asesores/${id}`, {
      headers:  new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }
}
