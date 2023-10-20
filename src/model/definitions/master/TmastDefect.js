import { DataTypes } from "sequelize";

export const tmastDefectDefinition = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  category_code: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  machine_group: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
};
