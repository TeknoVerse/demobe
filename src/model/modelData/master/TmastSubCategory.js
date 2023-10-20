
import Database from "../../../../config/database/Database.js";
import { TmastSubCategoryDefinition } from "../../definitions/master/TmastSubCategory.js";

const TmastSubCategory = Database.define('tmast_sub_category', TmastSubCategoryDefinition, {
    tableName : 'tmast_sub_category'
})

export default TmastSubCategory