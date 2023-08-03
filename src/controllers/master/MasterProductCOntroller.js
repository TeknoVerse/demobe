import TmastProduct from "../../models/master/TmastProduct.js"

export const getTmastProduct = async (req,res) => {
    try {
        const response = await TmastProduct.findAll()
        res.json(response)
    } catch (error) {
        console.log(error)
    }
}

export const createTmastProduct = async (req,res) => {
    try {
        await TmastProduct.create(req.body)
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
    }
}

export const deleteTmastProduct = async(req,res) => {
    try {
        const {id} = req.query
        await TmastProduct.destroy({
            where : {
                id :id
            }
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}

export const updateTmastProduct = async (req,res) => {
    try {
        const {id} = req.query
        await TmastProduct.update(req.body , {
            where : {
                id : id
            }
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}