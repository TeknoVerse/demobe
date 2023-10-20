import { TmastSubCategoryDefinition } from "../../definitions/master/TmastSubCategory.js"

export const up = async (queryInterface ) => {
    await queryInterface.createTable('tmast_sub_category', TmastSubCategoryDefinition)
}

export const down = async (queryInterface) => {
    await queryInterface.dropTable('tmast_sub_category')
}


