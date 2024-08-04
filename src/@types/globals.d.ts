import { boolean } from "zod";

export interface Usuario {
    idUsuario: number;
    usuario: string;
    contrasenia: string;
    idRol: number;
    idRrhh: number;
}

export interface Rol {
    id: int;
    nombre: string;
    descripcion: string;
}

export interface Rrhh {
    idRrhh: number;
    nombre: string;
    edad: string;
    dpi: string;
}
