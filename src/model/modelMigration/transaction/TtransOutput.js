

import { DataTypes } from "sequelize"
import { ttransOutputDefinition } from "../../definitions/transaction/TtransOutput.js"

export const up = async (queryInterface) => {
    await queryInterface.createTable("ttrans_output", ttransOutputDefinition)
  }
  
  export const down = async (queryInterface) => {
    await queryInterface.dropTable('ttrans_output')
  } 