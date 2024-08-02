import { Model, Optional } from 'sequelize';
import Role from '../models/rol';
import { Rol } from '../@types/globals';

class Rolmodel {
  // Método para obtener todos los roles
async getAllRoles(): Promise<Rol[]> {
  const roles = await Role.findAll();
  return roles.map(role => ({
    id: role.id,
    nombre: role.name
  }));
}

  // Método para obtener un rol por su ID
  async getRoleById(id: number): Promise<Rol | null> {
	const role = await Role.findByPk(id);
	return role ? (role as Rol) : null;
  }

  // Método para crear un nuevo rol
  async createRole(role: Rol): Promise<Role> {
	const newRole = await Role.create(role);
	return newRole;
  }

  // Método para actualizar un rol existente
  async updateRole(id: number, role: Partial<Rol>): Promise<[number, Role[]]> {
	const [affectedCount, affectedRows] = await Role.update(role, {
	  where: { id },
	  returning: true,
	});
	return [affectedCount, affectedRows];
  }

  // Método para eliminar un rol por su ID
  async deleteRole(id: number): Promise<number> {
	const deletedCount = await Role.destroy({
	  where: { id },
	});
	return deletedCount;
  }
}

export default Rolmodel;