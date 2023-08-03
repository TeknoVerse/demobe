import TmastDefect from "../../models/master/TmastDefect.js";

export const getTmastDefect = async (req,res) => {
    try {
        const response = await TmastDefect.findAll()
        res.json(response)
    } catch (error) {
        console.log(error)
    }
}

export const createTmastDefect = async (req,res) => {
    try {
        await TmastDefect.create(req.body)
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
    }
}

export const deleteTmastDefect = async(req,res) => {
    try {
        const {id} = req.query
        await TmastDefect.destroy({
            where : {
                id :id
            }
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}

export const updateTmastDefect = async (req,res) => {
    try {
        const {id} = req.query
        await TmastDefect.update(req.body , {
            where : {
                id : id
            }
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}