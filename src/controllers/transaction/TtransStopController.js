import TtransStop from "../../model/modelData/transaction/TtransStop.js"

export const getTtransStop = async (req,res) => {
    try {

        const {machine_no} = req.query
        if(machine_no){
            const response = await TtransStop.findAll({
                where : {
                    machine_no : machine_no
                }
            })
            res.json(response)
        }else {
            const response = await TtransStop.findAll()
            res.json(response)
        }
    } catch (error) {
        console.log(error)
    }
}

export const createTtransStop = async (req,res) => {
    try {
        await TtransStop.create(req.body)
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
    }
}

export const deleteTtransStop = async(req,res) => {
    try {
        const {id} = req.query
        await TtransStop.destroy({
            where : {
                id :id
            }
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}

export const updateTtransStop = async (req,res) => {
    try {
        const {id} = req.query
        await TtransStop.update(req.body , {
            where : {
                id : id
            }
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}