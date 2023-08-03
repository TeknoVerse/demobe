import TtransDefect from "../../models/transaction/TtransDefect.js"

export const getTtransDefect = async (req,res) => {
    try {
        const response = await TtransDefect.findAll()
        res.json(response)
    } catch (error) {
        console.log(error)
    }
}

export const createTtransDefect = async (req,res) => {
    try {
        await TtransDefect.create(req.body)
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