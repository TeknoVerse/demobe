import TtransSerialCodeQrKanban  from "../../model/modelData/transaction/TtransSerialCodeQrKanban.js"
import jwt from 'jsonwebtoken'
import {handleLocalTime} from '../MyFunction.js'
import { secret_key_serial_code_qr_kanban } from "../../../config/commands/ConfigurationDb.js"
export const getTtransSerialCodeQrKanban = async (req,res) => {
    try {
        const response = await TtransSerialCodeQrKanban.findAll()
      
        res.json(response)
    } catch (error) {
        console.log(error)
        
    }
}


export const createTtransSerialCodeQrKanban = async (req,res) => {
    try {
        const {data_kanban, index,token} = req.body
        const date = Date.now();
        
        if(token && data_kanban ) {
            const dataToken = token.split('|')
            const decoded = jwt.verify(dataToken[0],secret_key_serial_code_qr_kanban)
            const dataDecode = decoded.item
            const encrypt = jwt.sign({...dataDecode,index : dataToken[1]}, secret_key_serial_code_qr_kanban)
            const cekData = await TtransSerialCodeQrKanban.findOne({
            where : {
                kanban_id : data_kanban.id,
                serial_code : encrypt
            }
        })
        if(!cekData ){
            await TtransSerialCodeQrKanban.create({
                kanban_id : data_kanban.id,
                serial_code : encrypt
    
            })
        }
        }   
    return res.sendStatus(200)

    } catch (error) {
        console.log(error)
    }
}
export const deleteTtransSerialCodeQrKanban = async (req,res) => {
    try {
        const {id} = req.body
        await TtransSerialCodeQrKanban.destroy({
            where : {
                id : id
            }
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}


