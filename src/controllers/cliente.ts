import { Request, Response } from 'express';
import clienteModel from '../models/clientes';
// import { validateresponse, validateresponseUpdate } from '../schemas/response';
// import { response } from '../@types/globals';

export class clienteContresponseler {

    public static async getAll(_req: Request, res: Response) {
        try {
            const response = await clienteModel.findAll();
            res.json(response);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener los clientes.", error });
        }
    }

    public static async getById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const response = await clienteModel.findByPk(id);

            if (!response) {
                res.status(404).json({ message: "Cliente no encontrado." });
                return;
            }

            res.json(response);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener el cliente.", error });
        }
    }

    // public static async createresponse(req: Request, res: Response) {
    //     try {
    //         const result = validateresponse(req.body);
    //         if (!result.success) {
    //             throw result.error;
    //         }
    //         const newresponse = await clienteModel.create(result.data);
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
    //         const updatedresponse = await clienteModel.update(result.data, { where: { idresponse: id } });
    //         res.json({ message: "response actualizado exitosamente.", updated: updatedresponse[0] });
    //     } catch (error) {
    //         res.status(500).json({ message: "Error al actualizar el response.", error });
    //     }
    // }

    // public static async deleteresponse(req: Request, res: Response) {
    //     try {
    //         const id = parseInt(req.params.id);
    //         const deletedresponse = await clienteModel.destroy({ where: { id } });
    //         res.json({ message: "response eliminado exitosamente.", deleted: deletedresponse });
    //     } catch (error) {
    //         res.status(500).json({ message: "Error al eliminar el response.", error });
    //     }
    // }
}

export default clienteContresponseler;