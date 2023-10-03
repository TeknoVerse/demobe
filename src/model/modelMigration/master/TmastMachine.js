

import { tmastMachineDefinition } from "../../definitions/master/TmastMachine.js"

export const up = async (queryInterface) => {
    await queryInterface.createTable('tmast_machine',tmastMachineDefinition)
  }
  
  export const down = async (queryInterface) => {
    await queryInterface.dropTable('tmast_machine')
  } 