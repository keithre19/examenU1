import { DataTypes } from 'sequelize';
import sequelize from '../db/db';

const ProyectoModel = sequelize.define('proyecto', {
    proyecto_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_fin: {
        type: DataTypes.DATE,
        allowNull: true
    },
    porcentaje_completado: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'proyectos',
    timestamps: false
});

export default ProyectoModel;