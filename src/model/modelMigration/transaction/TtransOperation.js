

import { ttransOperationDefinition } from "../../definitions/transaction/TtransOperation.js"

export const up = async (queryInterface) => {
    await queryInterface.createTable("ttrans_operation", ttransOperationDefinition)
  }
  
  export const down = async (queryInterface) => {
    await queryInterface.dropTable('ttrans_operation')
  } 