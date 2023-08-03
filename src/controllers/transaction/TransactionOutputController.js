import TtransOutput from "../../models/transaction/TtransOutput.js"

export const getTtransOutput = async (req,res) => {
    try {

        const {machine_no} = req.query

        if(machine_no){
            const response = await TtransOutput.findAll({
                where : {
                    machine_no : machine_no
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
        await TtransOutput.create(req.body)
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