import { z } from 'zod';

export const loteSchema = z.object({
    idLote: z.number().int().optional(),
    categoria: z.string().max(255),
    cantidadInicial: z.number().int(),
    cantidadDisponible: z.number().int(),
    fechaCaducidad: z.string().date(),
    fechaIngreso: z.string().date(),
    estadoActivo: z.number().int(),
    idPedido: z.number().int(),
    idProducto: z.number().int()
});

export const validateLote = (lote: any) => {
    return loteSchema.safeParse(lote);
}

export const validateLoteUpdate = (lote: any) => {
    return loteSchema.partial().safeParse(lote);
}