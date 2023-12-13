import {ttransSerialCodeQrKanbanDefinition} from "../../definitions/transaction/TtransSerialCodeQrKanban.js"

export const up = async (queryInterface) => {
    await queryInterface.createTable('ttrans_serial_code_qr_kanban', ttransSerialCodeQrKanbanDefinition)
}

export const down = async (queryInterface) => {
    await queryInterface.dropTable('ttrans_serial_code_qr_kanban')
}