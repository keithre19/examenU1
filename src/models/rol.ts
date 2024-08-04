import { DataTypes} from 'sequelize';
import sequelize from '../db/db';

const RolModel = sequelize.define('rol', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rol: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    }
});

export default RolModel;    