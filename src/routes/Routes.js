import express from "express"
import { createTmastMachine, deleteTmastMachine, getTmastMachine, updateTmastMachine } from "../controllers/master/MasterMachineController.js"
import { createTmastCategory, deleteTmastCategory, getTmastCategory, updateTmastCategory} from "../controllers/master/MasterCategoryController.js"
import { createTmastSubCategory, deleteTmastSubCategory, getTmastSubCategory, updateTmastSubCategory } from "../controllers/master/MasterSubCategoryController.js"
import { createTmastDefect, deleteTmastDefect, getTmastDefect, updateTmastDefect } from "../controllers/master/MasterDefectCOntroller.js"
import { createTmastProduct, deleteTmastProduct, getTmastProduct, updateTmastProduct } from "../controllers/master/MasterProductCOntroller.js"
import { createTtransDefect, deleteTtransDefect, getTtransDefect, updateTtransDefect } from "../controllers/transaction/TransactionDefectController.js"
import { createTtransOperation, deleteTtransOperation, getTtransOperation, updateTtransOperation } from "../controllers/transaction/TransactionOperationCOntroller.js"
import { createTtransOutput, deleteTtransOutput, getTtransOutput, updateTtransOutput } from "../controllers/transaction/TransactionOutputController.js"
import { createTtransStop, deleteTtransStop, getTtransStop, updateTtransStop } from "../controllers/transaction/TransactionStopController.js"
import { createTworkDisplay, deleteTworkDisplay, getTworkDisplay, updateTworkDisplay } from "../controllers/public/TworkDisplayController.js"
import { createTmastSloc, deleteTmastSloc, getTmastSloc, updateTmastSloc } from "../controllers/master/MasterSlocController.js"
import { createTmastKanban, deleteTmastKanban, getTmastKanban, updateTmastKanban } from "../controllers/master/MasterKanbanCOntroller.js"
import { createTmastWarehouse, deleteTmastWarehouse, getTmastWarehouse, updateTmastWarehouse } from "../controllers/master/TmastWarehouseController.js"
import { createTworkOee, deleteTworkOee, getTworkOee, updateTworkOee } from "../controllers/public/TworkOeeController.js"
import { getTmastShift } from "../controllers/master/MasterShiftController.js"
import multer from 'multer'
import { createTtransDn, getTtransDn } from "../controllers/transaction/TransactionDn.js"

const Routes = new express.Router()

const storage = multer.diskStorage({
    destination : 'uploads/',
    filename : (req,file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({storage})

Routes.post('/dn', upload.single('file'), createTtransDn);
Routes.get('/dn', getTtransDn)

/* --------------- Start Master --------------- */


/* Start Tmast Warehouse */
Routes.get('/warehouse', getTmastWarehouse)
Routes.post('/warehouse', createTmastWarehouse)
Routes.patch('/warehouse', updateTmastWarehouse)
Routes.delete('/warehouse', deleteTmastWarehouse)
/* End Tmast Warehouse */

/* Start Tmast Machine */
Routes.get('/machine', getTmastMachine)
Routes.post('/machine', createTmastMachine)
Routes.patch('/machine', updateTmastMachine)
Routes.delete('/machine', deleteTmastMachine)
/* End Tmast Machine */

/* Start Tmast Shift */
Routes.get('/shift', getTmastShift )
/* End Tmast Shift */

/* Start Tmast Defect */
Routes.get('/defect', getTmastDefect)
Routes.post('/defect', createTmastDefect)
Routes.patch('/defect', updateTmastDefect)
Routes.delete('/defect', deleteTmastDefect)
/* End Tmast Defect */

/* Start Tmast Product */
Routes.get('/product', getTmastProduct)
Routes.post('/product', createTmastProduct)
Routes.patch('/product', updateTmastProduct)
Routes.delete('/product', deleteTmastProduct)
/* End Tmast Product */

/* Start Tmast Sloc */
Routes.get('/sloc', getTmastSloc)
Routes.post('/sloc', createTmastSloc)
Routes.patch('/sloc', updateTmastSloc)
Routes.delete('/sloc', deleteTmastSloc)
/* End Tmast Sloc */

/* Start Tmast Kanban */
Routes.get('/kanban', getTmastKanban)
Routes.post('/kanban', createTmastKanban)
Routes.patch('/kanban', updateTmastKanban)
Routes.delete('/kanban', deleteTmastKanban)
/* End Tmast Kanban */

/* Start Tmast Category */
Routes.get('/category', getTmastCategory )
Routes.post('/category', createTmastCategory)
Routes.patch('/category', updateTmastCategory)
Routes.delete('/category', deleteTmastCategory)
/* End Tmast Category */

/* Start Tmast Sub Category */
Routes.get('/sub-category', getTmastSubCategory )
Routes.post('/sub-category', createTmastSubCategory)
Routes.patch('/sub-category', updateTmastSubCategory)
Routes.delete('/sub-category', deleteTmastSubCategory)
/* End Tmast Sub Category */

/* --------------- End Master --------------- */


/* --------------- Start Transaction --------------- *

/* Start Transaction Defect */
Routes.get('/ttrans_defect', getTtransDefect)
Routes.post('/ttrans_defect', createTtransDefect)
Routes.patch('/ttrans_defect', updateTtransDefect)
Routes.delete('/ttrans_defect', deleteTtransDefect)
/* End Transaction Defect */

/* Start Transaction Operation */
Routes.get('/trans_operation', getTtransOperation)
Routes.post('/trans_operation', createTtransOperation)
Routes.patch('/trans_operation', updateTtransOperation)
Routes.delete('/trans_operation', deleteTtransOperation)
/* End Transaction Operation */

/* Start Transaction Output */
Routes.get('/trans_output', getTtransOutput)
Routes.post('/trans_output', createTtransOutput)
Routes.patch('/trans_output', updateTtransOutput)
Routes.delete('/trans_output', deleteTtransOutput)
/* End Transaction Output */

/* Start Transaction Stop */
Routes.get('/ttrans_stop', getTtransStop)
Routes.post('/ttrans_stop', createTtransStop)
Routes.patch('/ttrans_stop', updateTtransStop)
Routes.delete('/ttrans_stop', deleteTtransStop)
/* End Transaction Stop */


/* --------------- End Transaction --------------- */

/* --------------- Start Public --------------- */

/* Start Public Shift */
/* End Public Shift */


/* Start Public Twork Display */
Routes.get('/twork_display', getTworkDisplay)
Routes.post('/twork_display', createTworkDisplay)
Routes.patch('/twork_display', updateTworkDisplay)
Routes.delete('/twork_display', deleteTworkDisplay)
/* End Public Twork Display */

/* Start Public Twork Oee */
Routes.get('/twork_oee', getTworkOee)
Routes.post('/twork_oee', createTworkOee)
Routes.patch('/twork_oee', updateTworkOee)
Routes.delete('/twork_oee', deleteTworkOee)
/* End Public Twork Oee */

/* --------------- End Public --------------- */


export default Routes