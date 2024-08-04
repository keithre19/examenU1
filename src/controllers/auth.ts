import { Request, Response }  from 'express';
import UsuarioModel from '../models/usuario';
import bcrypt from 'bcrypt';
import { Usuario } from '../@types/globals';

export class AuthController {
    
    public static async login(req: Request, res: Response) {
        try {
            const { usuario, contrasenia } = req.body;
            const user = await UsuarioModel.findOne({ where: { usuario } }) as Usuario | null;
            if (user) {
                const match = await bcrypt.compare(contrasenia, user.contrasenia);
                if (match) {
                    res.json({ message: "Usuario autenticado." });
                } else {
                    res.status(401).json({ message: "Credenciales incorrectas." });
                }
            } else {
                res.status(401).json({ message: "Credenciales incorrectas." });
            }
        } catch (error) {
            res.status(500).json({ message: "Error al autenticar el usuario.", error });
        }
    } 
}
