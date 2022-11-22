import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoriaClinicaModelo } from '../modelos/historiaClinica.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class HistoriaClinicaService {
  url: string = 'http://localhost:3000';
  token: string = '';

  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService
  ) {
    this.token = this.seguridadService.obtenerToken();
  }

  getHistoriaClinicas(): Observable<HistoriaClinicaModelo[]> {
    return this.http.get<HistoriaClinicaModelo[]>(`${this.url}/historias-clinicas`);
  }

  crearHistoriaClinica(historiaClinica: HistoriaClinicaModelo): Observable<HistoriaClinicaModelo> {
    return this.http.post<HistoriaClinicaModelo>(`${this.url}/historias-clinicas`, historiaClinica, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  actualizarHistoriaClinica(historiaClinica: HistoriaClinicaModelo): Observable<HistoriaClinicaModelo> {
    return this.http.put<HistoriaClinicaModelo>(`${this.url}/historias-clinicas/${historiaClinica.id}`, historiaClinica, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  getHistoriaClinicaXId(id:string): Observable<HistoriaClinicaModelo> {
    return this.http.get<HistoriaClinicaModelo>(`${this.url}/historias-clinicas/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  eliminarHistoriaClinica(id: string): Observable<any> {
    return this.http.delete(`${this.url}/historias-clinicas/${id}`, {
      headers:  new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }
}
