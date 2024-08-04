import { DataTypes } from 'sequelize';
import sequelize from '../db/db';

const RrhhModel = sequelize.define('rrhh', {
    idRrhh: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(255)
    },
    edad: {
        type: DataTypes.STRING(3)
    },
    dpi: {
        type: DataTypes.STRING(13)
    }
}, {
    tableName: 'rrhh',
    timestamps: false
});

export default RrhhModel;