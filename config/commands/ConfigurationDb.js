import dotenv from "dotenv"
dotenv.config()

export const port_be = process.env.NODE_BE_PORT
export const db_name = process.env.NODE_DB_NAME
export const db_user = process.env.NODE_DB_USER
export const db_pass = process.env.NODE_DB_PASS
export const db_host = process.env.NODE_DB_HOST
export const db_dialect = process.env.NODE_DB_DIALECT
export const access_token = process.env.NODE_ACCESS_TOKEN_SECRET
export const refresh_token = process.env.NODE_REFRESHS_TOKEN_SECRET
export const secret_key_serial_code_qr_kanban = process.env.REACT_APP_SECRET_KEY_SERIAL_CODE_QR_KANBAN
