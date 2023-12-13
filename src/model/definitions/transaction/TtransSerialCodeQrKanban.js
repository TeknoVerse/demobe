import { DataTypes } from "sequelize";

export const ttransSerialCodeQrKanbanDefinition = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  kanban_id : {
    type : DataTypes.STRING,
    allowNull : true
  },
  serial_code : {
    type : DataTypes.STRING,
    allowNull : true
  },
  scanned_time : {
    type: DataTypes.DATE,
    allowNull : true
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
};
