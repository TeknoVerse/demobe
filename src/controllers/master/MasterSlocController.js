import TmastSloc from "../../models/master/TmastSloc.js"
export const getTmastSloc = async (req,res) => {
    try {
        const response = await TmastSloc.findAll()
        res.json(response)
    } catch (error) {
        console.log(error)
    }
}

export const createTmastSloc = async (req,res) => {
    try {
        await TmastSloc.create(req.body)
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
    }
}

export const deleteTmastSloc = async(req,res) => {
    try {
        const {id} = req.query
        await TmastSloc.destroy({
            where : {
                id :id
            }
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}

export const updateTmastSloc = async (req,res) => {
    try {
        const {id} = req.query
        await TmastSloc.update(req.body , {
            where : {
                id : id
            }
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}