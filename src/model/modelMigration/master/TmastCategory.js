import {TmastCategoryDefinition} from "../../definitions/master/TmastCategory.js"

export const up = async (queryInterface ) => {
    await queryInterface.createTable('tmast_category', TmastCategoryDefinition)
}

export const down = async (queryInterface) => {
    await queryInterface.dropTable('tmast_category')
}


