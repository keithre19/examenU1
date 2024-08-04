import Rol from '../models/rol';

export const getRoles = async (req, res) => {
    try {
        const roles = await Rol.findAll();
        res.json(roles);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener los roles'
        });
    }
};

export const getRol = async (req, res) => {
    try {
        const rol = await Rol.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(rol);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener el rol'
        });
    }
};

export const createRol = async (req, res) => {
    try {
        const rol = await Rol.create(req.body);
        res.json(rol);
    } catch (error) {
        res.status(500).json({
            message: 'Error al crear el rol'
        });
    }
};

export const updateRol = async (req, res) => {
    try {
        await Rol.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: 'Rol actualizado'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar el rol'
        });
    }
};

export const deleteRol = async (req, res) => {
    try {
        await Rol.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: 'Rol eliminado'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar el rol'
        });
    }
};