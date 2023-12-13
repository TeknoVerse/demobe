import Database from "../../../../config/database/Database.js";

import { ttransSerialCodeQrKanbanDefinition } from "../../definitions/transaction/TtransSerialCodeQrKanban.js";

const TtransSerialCodeQrKanban = Database.define('ttrans_serial_code_qr_kanban', ttransSerialCodeQrKanbanDefinition, {
    tableName : "ttrans_serial_code_qr_kanban"
})

export default(TtransSerialCodeQrKanban)