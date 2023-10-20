import { TmastShiftDefinition } from "../../definitions/master/TmastShift.js"

export const up = async (queryInterface) => {
    await queryInterface.createTable('tmast_shift', TmastShiftDefinition)
}

export const down = async (queryInterface) => {
    await queryInterface.dropTable('tmast_shift')
}


