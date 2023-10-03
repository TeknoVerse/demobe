import Database from "../../config/database/Database.js";

import * as TmastProduct from "../model/modelMigration/master/TmastProduct.js"
import * as TmastDefect from "../model/modelMigration/master/TmastDefect.js"
import * as TmastKanban from "../model/modelMigration/master/TmastKanban.js"
import * as TmastMachine from "../model/modelMigration/master/TmastMachine.js"
import * as TmastSloc from "../model/modelMigration/master/TmastSloc.js"
import * as TmastWarehouse from "../model/modelMigration/master/TmastWarehouse.js"
import * as  TworkDisplay from "../model/modelMigration/public/TworkDisplay.js"
import * as TtransDefect from "../model/modelMigration/transaction/TtransDefect.js"
import * as TtransOperation from "../model/modelMigration/transaction/TtransOperation.js"
import * as TtransOutput from "../model/modelMigration/transaction/TtransOutput.js"
import * as TtransStop from "../model/modelMigration/transaction/TtransStop.js"

const runMigrations = async () => {
    try {
        await Database.authenticate()
        console.log('Conection Success')
        await TmastProduct.up(Database.getQueryInterface())
        await TmastDefect.up(Database.getQueryInterface())
        await TmastKanban.up(Database.getQueryInterface())
        await TmastMachine.up(Database.getQueryInterface())
        await TmastSloc.up(Database.getQueryInterface())
        await TmastWarehouse.up(Database.getQueryInterface())
        await TworkDisplay.up(Database.getQueryInterface())
        await TtransDefect.up(Database.getQueryInterface())
        await TtransOperation.up(Database.getQueryInterface())
        await TtransOutput.up(Database.getQueryInterface())
        await TtransStop.up(Database.getQueryInterface())
        console.log('Migration Success fully')

    } catch (error) {
        console.error('Conection Failed')
    } finally {
        await Database.close()
    }
}

runMigrations();