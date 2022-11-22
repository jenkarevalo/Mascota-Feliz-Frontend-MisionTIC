import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanModelo } from '../modelos/plan.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  url: string = 'http://localhost:3000';
  token: string = '';

  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService
  ) {
    this.token = this.seguridadService.obtenerToken();
  }

  getPlan(): Observable<PlanModelo[]> {
    return this.http.get<PlanModelo[]>(`${this.url}/planes`);
  }

  crearPlan(plan: PlanModelo): Observable<PlanModelo> {
    return this.http.post<PlanModelo>(`${this.url}/planes`, plan, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  actualizarPlan(plan: PlanModelo): Observable<PlanModelo> {
    return this.http.put<PlanModelo>(`${this.url}/planes/${plan.id}`, plan, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  getPlanXId(id:string): Observable<PlanModelo> {
    return this.http.get<PlanModelo>(`${this.url}/planes/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }

  eliminarPlan(id: string): Observable<any> {
    return this.http.delete(`${this.url}/planes/${id}`, {
      headers:  new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      })
    });
  }
}
