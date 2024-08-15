import zod from "zod";

const proveedorSchema = zod.object({
    idVenta: zod.number().int().optional(),
    fecha: zod.date(),
    montoTotal: zod.number(),
    idCliente: zod.number().int(),
    idRrhh: zod.number().int()
});

export const validateproveedor = (proveedor: any) => {
    return proveedorSchema.safeParse(proveedor);
}

export const validateproveedorUpdate = (proveedor: any) => {
    return proveedorSchema.partial().safeParse(proveedor);
}