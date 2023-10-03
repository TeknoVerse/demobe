import { DataTypes } from "sequelize"
import { tmastSlocDefinition } from "../../definitions/master/TmastSloc.js"

export const up = async (queryInterface) => {
    await queryInterface.createTable('tmast_sloc', tmastSlocDefinition)
  }
  
  export const down = async (queryInterface) => {
    await queryInterface.dropTable('tmast_sloc')
  } 