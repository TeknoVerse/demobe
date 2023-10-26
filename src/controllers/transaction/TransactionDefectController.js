import TtransDefect from "../../model/modelData/transaction/TtransDefect.js"
import { handleLocalTime } from "../MyFunction.js"

export const getTtransDefect = async (req,res) => {
    try {
        const {machine_no} = req.query
        if(machine_no) {
            const response = await TtransDefect.findAll({
                where : {
                    machine_no : machine_no
                }
            })
            res.json(response)
        }else{

        const response = await TtransDefect.findAll()
        res.json(response)
    }

    } catch (error) {
        console.log(error)
    }
}

export const createTtransDefect = async (req,res) => {
    try {
        let data = req.body
        const time24Hour = handleLocalTime(data.time)
    
        const currentDate = new Date(data.time).toISOString()

        data = {...data, time: time24Hour, work_date : currentDate}
        await TtransDefect.create(data)
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
    }
}

export const deleteTtransDefect = async(req,res) => {
    try {
        const {id} = req.query
        await TtransDefect.destroy({
            where : {
                id :id
            }
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}

export const updateTtransDefect = async (req,res) => {
    try {
        const {id} = req.query
        await TtransDefect.update(req.body , {
            where : {
                id : id
            }
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}