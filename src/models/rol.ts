import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import sequelize from '../db/db';

interface RoleAttributes {
  id: number;
  name: string;
  // Agrega otros atributos según tu tabla 'roles'
}

interface RoleCreationAttributes extends Optional<RoleAttributes, 'id'> {}

class Role extends Model<RoleAttributes, RoleCreationAttributes> implements RoleAttributes {
  public id!: number;
  public name!: string;
  // Agrega otros atributos según tu tabla 'roles'

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Role.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        }

  },
  {
    sequelize: sequelize as unknown as Sequelize,
    tableName: 'roles',
  }
);

export default Role;