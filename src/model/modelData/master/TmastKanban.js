import Database from "../../../../config/database/Database.js";

import { tmastKanbanDefinition } from "../../definitions/master/TmastKanban.js";


const TmastKanban = Database.define('tmast_kanban', tmastKanbanDefinition, {
    tableName : 'tmast_kanban'
})

export default TmastKanban;

