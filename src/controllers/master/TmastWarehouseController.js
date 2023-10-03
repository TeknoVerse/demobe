import TmastWarehouse from "../../model/modelData/master/TmastWarehouse.js"

export const getTmastWarehouse = async (req,res) => {
    try {
        const response = await TmastWarehouse.findAll()
        res.json(response)
    } catch (error) {
        console.log(error)
    }
}

export const createTmastWarehouse = async (req,res) => {
    try {
        const {sloc_code, part_code} = req.body

        const cekExistProduct = await TmastWarehouse.findOne({
            where : {
                sloc_code : sloc_code,
                part_code : part_code
            }
        })
        if(!cekExistProduct){
            await TmastWarehouse.create(req.body)
            res.sendStatus(201)
        }else{
            res.json({msg : "Data Already Exist"})
        }

   
    } catch (error) {
        console.log(error)
    }
}

export const deleteTmastWarehouse = async(req,res) => {
    try {
        const {id} = req.query
        await TmastWarehouse.destroy({
            where : {
                id :id
            }
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}

export const updateTmastWarehouse = async (req,res) => {
    try {
        const {id} = req.query
        await TmastWarehouse.update(req.body , {
            where : {
                id : id
            }
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}