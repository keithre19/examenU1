import { z } from 'zod';

export const productoSchema = z.object({
    idProducto: z.number().int().optional(),
    nombre: z.string().max(255),
    precioVenta: z.number().positive().multipleOf(0.01),
    descripcion: z.string().max(255),
    esPerecedero: z.number(),
    estadoActivo: z.number()
});

export const validateProducto = (producto: any) => {
    return productoSchema.safeParse(producto);
}

export const validateProductoUpdate = (producto: any) => {
    return productoSchema.partial().safeParse(producto);
}

