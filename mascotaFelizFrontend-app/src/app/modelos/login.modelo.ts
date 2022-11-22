import { DatosModelo } from "./datos.modelo";

export class LoginModelo{
    datos?: DatosModelo;
    token?: string;
    enSesion: boolean = false;
}