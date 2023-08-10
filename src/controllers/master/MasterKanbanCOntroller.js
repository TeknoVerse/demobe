import TmastKanban from "../../models/master/TmastKanban.js"
export const getTmastKanban = async (req,res) => {
    try {
        const response = await TmastKanban.findAll()
        res.json(response)
    } catch (error) {
        console.log(error)
    }
}

export const createTmastKanban = async (req,res) => {
    try {
        await TmastKanban.create(req.body)
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
    }
}

export const deleteTmastKanban = async(req,res) => {
    try {
        const {id} = req.query
        await TmastKanban.destroy({
            where : {
                id :id
            }
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}

export const updateTmastKanban = async (req,res) => {
    try {
        const {id} = req.query
        await TmastKanban.update(req.body , {
            where : {
                id : id
            }
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}