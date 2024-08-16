import { z } from 'zod';

export const loteSchema = z.object({
    idLote: z.number().int().optional(),
    categoria: z.string().regex(/^\d+$/),
    cantidadInicial: z.string().regex(/^\d+$/),
    cantidadDisponible: z.number().int(),
    fechaCaducidad: z.string().date(),
    fechaIngreso: z.string().date(),
    idPedido: z.string().regex(/^\d+$/),
    idProducto: z.string().regex(/^\d+$/)
});

export const validateLote = (lote: any) => {
    return loteSchema.safeParse(lote);
}

export const validateLoteUpdate = (lote: any) => {
    return loteSchema.partial().safeParse(lote);
}