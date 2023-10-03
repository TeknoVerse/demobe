import { DataTypes } from "sequelize"
import { tmastDefectDefinition } from "../../definitions/master/TmastDefect.js"

export const up = async (queryInterface ) => {
    await queryInterface.createTable('tmast_defect', tmastDefectDefinition)
}

export const down = async (queryInterface) => {
    await queryInterface.dropTable('tmast_defect')
}


