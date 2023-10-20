import {TmastCategoryDefinition} from '../../definitions/master/TmastCategory.js'
import Database from "../../../../config/database/Database.js";

const TmastCategory = Database.define('tmast_category', TmastCategoryDefinition, {
    tableName : 'tmast_category'
})

export default TmastCategory