import { Request, Response } from 'express';
import sequelize from '../db/db';
// import ventaModel from '../models/venta';
// import { validateCliente, validateClienteUpdate} from '../schemas/cliente';
// import { cliente } from '../@types/globals';
// import { response } from '../@types/globals';

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

    // public static async create(req: Request, res: Response) {
    //     try {
    //         const result = validateCliente(req.body);
    //         if (!result.success) {
    //             throw result.error;
    //         }
    //         const newresponse = await ventaModel.create(result.data);
    //         res.json({ 
    //             message: "Cliente creado exitosamente.", 
    //             Cliente: newresponse });
    //     } catch (error) {
    //         res.status(500).json({ message: "Error al crear el Cliente.", error });
    //     }
    // }

    // public static async update(req: Request, res: Response) {
    //     try {
    //         const id = parseInt(req.params.id);
    //         const result = validateClienteUpdate(req.body);
    //         if (!result.success) {
    //             throw result.error;
    //         }
            
    //         const [numberOfAffectedRows] = await ventaModel.update(result.data, {
    //             where: { idCliente: id }
    //         });
    
    //         if (numberOfAffectedRows === 0) {
    //             return res.status(404).json({ message: "Cliente no encontrado, o datos erroneos" });
    //         }
    
            
    //         const updatedClient = await ventaModel.findByPk(id);
    
    //         res.json({
    //             message: "Cliente Actualizado Exitosamente.",
    //             cliente: updatedClient
    //         });
    //     } catch (error) {
    //         res.status(500).json({ message: "Error al actualizar el Cliente.", error });
    //     }
    // }
    

    // public static async delete(req: Request, res: Response) {
    //     try {
    //         const id = parseInt(req.params.id);
    //         const deletedResponse = await ventaModel.destroy({ where: { idCliente: id } });
    //         if (deletedResponse === 0) {
    //             return res.status(404).json({ message: "Cliente no encontrado" });
    //         }
    
    //         res.json({ message: "Cliente eliminado exitosamente.", deleted: deletedResponse });
    //     } catch (error) {
    //         res.status(500).json({ message: "Error al eliminar el response.", error });
    //     }
    // }
}

export default clienteContresponseler;