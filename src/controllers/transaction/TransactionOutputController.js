import TtransOutput from "../../model/modelData/transaction/TtransOutput.js"
import {handleLocalTime} from "../MyFunction.js"
export const getTtransOutput = async (req,res) => {
    try {

        const {machine_no,part_no } = req.query

        if(machine_no,part_no){
            const response = await TtransOutput.findAll({
                where : {
                    machine_no : machine_no,
                    part_no : part_no
                }
            })
            res.json(response)
        }else {
            const response = await TtransOutput.findAll()
            res.json(response)
        }
        

      
    } catch (error) {
        console.log(error)
    }
}

export const createTtransOutput = async (req,res) => {
    try {

        const {machine_no ,qty,current_time, part_no} = req.body


        const time = handleLocalTime(current_time)
        const date = new Date(current_time).toISOString()


        await TtransOutput.create({
            machine_no,qty,time,part_no, work_date : date
        })
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
    }
}

export const deleteTtransOutput = async(req,res) => {
    try {
        const {id} = req.query
        await TtransOutput.destroy({
            where : {
                id :id
            }
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}

export const updateTtransOutput = async (req,res) => {
    try {
        const {id} = req.query
        await TtransOutput.update(req.body , {
            where : {
                id : id
            }
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}