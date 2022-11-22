import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginModelo } from '../modelos/login.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  datosUsuarioEnSesion = new BehaviorSubject<LoginModelo>(new LoginModelo());

  constructor(
    private http: HttpClient
  ) {
    this.verificarSesionActual();
   }

  verificarSesionActual() {
    let datos = this.obtenerInformacionSesion();
    if (datos) {
      this.datosUsuarioEnSesion.next(datos);
    }
  }

  validarUsuario(usuario: string, clave: string): Observable<LoginModelo> {
    const url: string = 'http://localhost:3000/validar-acceso';
    const credenciales = {
      usuario: usuario,
      clave: clave
    }

    return this.http.post<LoginModelo>(
      url,
      credenciales,
      {
        headers: new HttpHeaders({})
      }
    );
  }

  getDatosUsuarioEnSesion() {
    return this.datosUsuarioEnSesion.asObservable();
  }

  almacenarSesion(datos: LoginModelo) {
    datos.enSesion = true;
    localStorage.setItem("datosSesion", JSON.stringify(datos));
    this.datosUsuarioEnSesion.next(datos);
  }

  obtenerInformacionSesion() {
    let stringDatos = localStorage.getItem("datosSesion");
    if (stringDatos) {
      return JSON.parse(stringDatos);
    }
    return null;
  }

  eliminarSesion() {
    localStorage.clear();
  }

  obtenerToken(): string {
    let datosSesion = localStorage.getItem("datosSesion");
    if (datosSesion) {
      let datos = JSON.parse(datosSesion);
      return datos.token;
    }
    return "";
  }
}
