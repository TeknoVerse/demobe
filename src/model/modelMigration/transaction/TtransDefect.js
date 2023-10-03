

import { DataTypes } from "sequelize"
import { ttransDefectDefinition } from "../../definitions/transaction/TtransDefect.js"

export const up = async (queryInterface) => {
    await queryInterface.createTable("ttrans_defect", ttransDefectDefinition)
  }
  
  export const down = async (queryInterface) => {
    await queryInterface.dropTable('ttrans_defect')
  } 