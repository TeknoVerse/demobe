import express from "express"
import { createTmastMachine, deleteTmastMachine, getTmastMachine, updateTmastMachine } from "../controllers/master/MasterMachineController.js"
import { createTmastDefect, deleteTmastDefect, getTmastDefect, updateTmastDefect } from "../controllers/master/MasterDefectCOntroller.js"
import { createTmastProduct, deleteTmastProduct, getTmastProduct, updateTmastProduct } from "../controllers/master/MasterProductCOntroller.js"
import { createTtransDefect, deleteTtransDefect, getTtransDefect, updateTtransDefect } from "../controllers/transaction/TransactionDefectController.js"
import { createTtransOperation, deleteTtransOperation, getTtransOperation, updateTtransOperation } from "../controllers/transaction/TransactionOperationCOntroller.js"
import { createTtransOutput, deleteTtransOutput, getTtransOutput, updateTtransOutput } from "../controllers/transaction/TransactionOutputController.js"
import { createTtransStop, deleteTtransStop, getTtransStop, updateTtransStop } from "../controllers/transaction/TransactionStopController.js"
import { createTworkDisplay, deleteTworkDisplay, getTworkDisplay, updateTworkDisplay } from "../controllers/public/TworkDisplayController.js"
const Routes = new express.Router()

/* --------------- Start Master --------------- */

/* Start Tmast Machine */
Routes.get('/machine', getTmastMachine)
Routes.post('/machine', createTmastMachine)
Routes.patch('/machine', updateTmastMachine)
Routes.delete('/machine', deleteTmastMachine)
/* End Tmast Machine */

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

/* --------------- End Master --------------- */


/* --------------- Start Transaction --------------- *

/* Start Transaction Defect */
Routes.get('/trans_defect', getTtransDefect)
Routes.post('/trans_defect', createTtransDefect)
Routes.patch('/trans_defect', updateTtransDefect)
Routes.delete('/trans_defect', deleteTtransDefect)
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
Routes.get('/trans_stop', getTtransStop)
Routes.post('/trans_stop', createTtransStop)
Routes.patch('/trans_stop', updateTtransStop)
Routes.delete('/trans_stop', deleteTtransStop)
/* End Transaction Stop */

/* --------------- End Transaction --------------- */

/* --------------- Start Public --------------- */

/* Start Public Twork Display */
Routes.get('/twork_display', getTworkDisplay)
Routes.post('/twork_display', createTworkDisplay)
Routes.patch('/twork_display', updateTworkDisplay)
Routes.delete('/twork_display', deleteTworkDisplay)
/* End Public Twork Display */

/* --------------- End Public --------------- */


export default Routes