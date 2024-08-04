import zod from "zod";

const rrhhSchema = zod.object({
    nombre: zod.string().max(255),
    edad: zod.string().max(3),
    dpi: zod.string().max(13),
});

export const validateRrhh = (rrhh: any) => {
    return rrhhSchema.safeParse(rrhh);
}

export const validateRrhhUpdate = (rrhh: any) => {
    return rrhhSchema.partial().safeParse(rrhh);
}