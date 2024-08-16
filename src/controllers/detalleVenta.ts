import { Request, Response } from 'express';
import detalleVentaModel from '../models/detalleVenta';
import { validatedetalleVenta } from '../schemas/detalleventa';
import { detalleventa } from '../@types/globals';

export class proveedorContresponseler {

    public static async getAll(req: Request, res: Response) {
        try {
            const response = await detalleVentaModel.findAll({where: {idVenta:req.params.id} });
            res.json(response);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener los detalles.", error });
        }
    }

    public static async create(req: Request, res: Response) {
        try {
            const result = validatedetalleVenta(req.body);
            if (!result.success) {
                throw result.error;
            }
            const newresponse = await detalleVentaModel.create(result.data);
            res.json({ message: "Detalle registrado exitosamente.", id: (newresponse as unknown as detalleventa).idDetalleVenta });
        } catch (error) {
            res.status(500).json({ message: "Error al registrar el detalle.", error });
        }
    }

}

export default proveedorContresponseler;