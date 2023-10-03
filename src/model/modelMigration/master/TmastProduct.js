import {TmastProductDefinition} from "../../definitions/master/TmastProduct.js"


export const up = async (queryInterface) => {
    await queryInterface.createTable('tmast_product', TmastProductDefinition )
  }
  
  export const down = async (queryInterface) => {
    await queryInterface.dropTable('tmast_product')
  } 