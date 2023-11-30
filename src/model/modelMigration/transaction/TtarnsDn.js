import {ttransDnDefinition} from "../../definitions/transaction/TtransDn.js"

export const up = async (queryInterface) => {
    await queryInterface.createTable('ttrans_dn', ttransDnDefinition)
}

export const down = async (queryInterface) => {
    await queryInterface.dropTable('ttrans_dn')
}