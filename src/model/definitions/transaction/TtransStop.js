import { DataTypes } from "sequelize";

export const ttransStopDefinition = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  machine_no: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  start: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  finish: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  duration: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  down_time: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  category_code: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sub_category_code: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  identification: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  action: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  note: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  work_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
};
