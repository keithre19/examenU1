import { boolean } from "zod";

export interface User {
    id: int;
    usuario: string;
    contraseña: string;
    rol: boolean;
    rrhh: int;
}

export interface Rol {
    id: int;
    nombre: string;
    descripcion: string;
}

export interface Rrhh {
    nombre: string;
    edad: int;
    dpi: string;
}
