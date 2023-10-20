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
import * as TworkOee from "../model/modelMigration/public/TworkOee.js"
import * as TmastShift from "../model/modelMigration/master/TmastShift.js"



const runRollback = async () => {
    try {
        await Database.authenticate()
        console.log('Conection Success')
    /*     await TmastProduct.down(Database.getQueryInterface())
        await TmastDefect.down(Database.getQueryInterface())
        await TmastKanban.down(Database.getQueryInterface())
        await TmastMachine.down(Database.getQueryInterface())
        await TmastSloc.down(Database.getQueryInterface())
        await TmastWarehouse.down(Database.getQueryInterface())
        await TworkDisplay.down(Database.getQueryInterface())
        await TtransDefect.down(Database.getQueryInterface())
        await TtransOperation.down(Database.getQueryInterface())
        await TtransOutput.down(Database.getQueryInterface())
        await TtransStop.down(Database.getQueryInterface()) */
        await TworkOee.down(Database.getQueryInterface())
        //await TmastShift.down(Database.getQueryInterface())
        console.log('Migration Destroy Success fully')
q
    } catch (error) {
        console.error('Conection Failed')
    } finally {
        await Database.close()
    }
}

runRollback();