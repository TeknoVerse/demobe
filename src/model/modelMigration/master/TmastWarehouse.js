
import { DataTypes } from "sequelize"
import { tmastWarehouseDefinition } from "../../definitions/master/TmastWarehouse.js"

export const up = async (queryInterface) => {
    await queryInterface.createTable("tmast_warehouse", tmastWarehouseDefinition,)
  }
  
  export const down = async (queryInterface) => {
    await queryInterface.dropTable('tmast_warehouse')
  } 