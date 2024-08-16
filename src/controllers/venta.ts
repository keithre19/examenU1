import { Request, Response } from 'express';
import sequelize from '../db/db';
import ventaModel from '../models/venta';
import { validateVenta} from '../schemas/venta';

export class clienteContresponseler {

    public static async getAll(_req: Request, res: Response) {
        try {
            const [response] = await sequelize.query(`
                SELECT 
                    v.idVenta,
                    v.fecha,
                    v.montoTotal,
                    c.nombre AS clienteNombre,
                    e.nombre AS empleadoNombre
                FROM venta v
                INNER JOIN cliente c ON v.idCliente = c.idCliente
                INNER JOIN rrhh e ON v.idRrhh = e.idRrhh;
            `);
            
            res.json(response);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener las ventas.", error });
        }
    }

    public static async getById(req: Request, res: Response) {
        try {
            const [response] = await sequelize.query(`
                SELECT 
                    v.idVenta,
                    v.fecha,
                    v.montoTotal,
                    c.nombre AS clienteNombre,
                    e.nombre AS empleadoNombre
                FROM venta v
                INNER JOIN cliente c ON v.idCliente = c.idCliente
                INNER JOIN rrhh e ON v.idRrhh = e.idRrhh
                WHERE v.idVenta = :idVenta
            `, {
                replacements: { idVenta: req.params.id }
            });
            
            if(response.length===0){
                res.json({message: "Venta no encontrada"});
            }
            res.json(response[0]);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener la venta.", error });
        }
    }

    public static async create(req: Request, res: Response) {
        try {
            const result = validateVenta(req.body);
            if (!result.success) {
                throw result.error;
            }
            const newresponse = await ventaModel.create(result.data);
            res.json({ 
                message: "Venta registrada exitosamente.", 
                Cliente: newresponse });
        } catch (error) {
            res.status(500).json({ message: "Error al registrar la venta.", error });
        }
    }
}

export default clienteContresponseler;