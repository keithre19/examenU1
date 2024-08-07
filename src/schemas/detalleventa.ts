import zod from "zod";

const detalleVentaSchema = zod.object({
    fecha: zod.date(),
    montoTotal: zod.number().positive(),
    idCliente : zod.number(),
    idRrhh  : zod.number(),
});

export const validatedetalleVenta = (detalleVenta: any) => {
    return detalleVentaSchema.safeParse(detalleVenta);
}

export const validatedetalleVentaUpdate = (detalleVenta: any) => {
    return detalleVentaSchema.partial().safeParse(detalleVenta);
}