import zod from "zod";

const detalleVentaSchema = zod.object({
    idDetalleVenta: zod.number().int(),
    cantidadProducto: zod.number().positive(),
    subtotal: zod.number(),
    idVenta: zod.number().int(),
    idProducto: zod.number().int()
});

export const validatedetalleVenta = (detalleVenta: any) => {
    return detalleVentaSchema.safeParse(detalleVenta);
}

export const validatedetalleVentaUpdate = (detalleVenta: any) => {
    return detalleVentaSchema.partial().safeParse(detalleVenta);
}