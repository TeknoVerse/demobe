

import { tworkDisplayDefinition } from "../../definitions/public/TworkDisplay.js"

export const up = async (queryInterface) => {
    await queryInterface.createTable("twork_display", tworkDisplayDefinition )
  }
  
  export const down = async (queryInterface) => {
    await queryInterface.dropTable('twork_display')
  } 