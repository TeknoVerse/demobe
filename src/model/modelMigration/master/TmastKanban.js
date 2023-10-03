import { DataTypes } from "sequelize"
import { tmastKanbanDefinition } from "../../definitions/master/TmastKanban.js"

export const up = async (queryInterface ) => {
    await queryInterface.createTable('tmast_kanban', tmastKanbanDefinition)
}

export const down = async (queryInterface) => {
    await queryInterface.dropTable('tmast_kanban')
}
