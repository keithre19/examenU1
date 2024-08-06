import { Request, Response } from 'express';
import proveedorModel from '../models/proveedor';
// import { validateresponse, validateresponseUpdate } from '../schemas/response';
// import { response } from '../@types/globals';

export class proveedorContresponseler {

    public static async getAll(_req: Request, res: Response) {
        try {
            const response = await proveedorModel.findAll();
            res.json(response);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener los proveedores.", error });
        }
    }

    public static async getById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const response = await proveedorModel.findByPk(id);

            if (!response) {
                res.status(404).json({ message: "Proveedor no encontrado." });
                return;
            }

            res.json(response);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener el proveedor.", error });
        }
    }

    // public static async createresponse(req: Request, res: Response) {
    //     try {
    //         const result = validateresponse(req.body);
    //         if (!result.success) {
    //             throw result.error;
    //         }
    //         const newresponse = await proveedorModel.create(result.data);
    //         res.json({ message: "response creado exitosamente.", id: (newresponse as unknown as response).id });
    //     } catch (error) {
    //         res.status(500).json({ message: "Error al crear el response.", error });
    //     }
    // }

    // public static async updateresponse(req: Request, res: Response) {
    //     try {
    //         const id = parseInt(req.params.id);
    //         const result = validateresponseUpdate(req.body);
    //         if (!result.success) {
    //             throw result.error;
    //         }
    //         const updatedresponse = await proveedorModel.update(result.data, { where: { idresponse: id } });
    //         res.json({ message: "response actualizado exitosamente.", updated: updatedresponse[0] });
    //     } catch (error) {
    //         res.status(500).json({ message: "Error al actualizar el response.", error });
    //     }
    // }

    // public static async deleteresponse(req: Request, res: Response) {
    //     try {
    //         const id = parseInt(req.params.id);
    //         const deletedresponse = await proveedorModel.destroy({ where: { id } });
    //         res.json({ message: "response eliminado exitosamente.", deleted: deletedresponse });
    //     } catch (error) {
    //         res.status(500).json({ message: "Error al eliminar el response.", error });
    //     }
    // }
}

export default proveedorContresponseler;