import TworkDisplay from "../../model/modelData/public/TworkDisplay.js"

export const getTworkDisplay = async (req,res) => {
    try {
        const response = await TworkDisplay.findAll()
        res.json(response)
    } catch (error) {
        console.log(error)
    }
}

export const createTworkDisplay = async (req,res) => {
    try {
        await TworkDisplay.create(req.body)
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
    }
}

export const deleteTworkDisplay = async(req,res) => {
    try {
        const {id} = req.query
        await TworkDisplay.destroy({
            where : {
                id :id
            }
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}

export const updateTworkDisplay = async (req,res) => {
    try {
        const {id} = req.query
        await TworkDisplay.update(req.body , {
            where : {
                id : id
            }
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}