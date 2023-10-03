

import { DataTypes } from "sequelize"
import { ttransStopDefinition } from "../../definitions/transaction/TtransStop.js"

export const up = async (queryInterface) => {
    await queryInterface.createTable("ttrans_stop", ttransStopDefinition)
  }
  
  export const down = async (queryInterface) => {
    await queryInterface.dropTable('ttrans_stop')
  } 