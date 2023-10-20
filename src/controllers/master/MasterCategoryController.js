import TmastCategory from "../../model/modelData/master/TmastCategory.js";

export const getTmastCategory = async (req,res) => {
    try {
        const {code} = req.query
        if(code) {
            const response = await TmastCategory.findOne({
                where : {
                    code : code
                }
            })
            res.json(response)
        }else{
        const response = await TmastCategory.findAll()
        res.json(response)
    }

    } catch (error) {
        console.log(error)
    }
}

export const createTmastCategory = async (req,res) => {
    try {
        await TmastCategory.create(req.body)
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
    }
}

export const deleteTmastCategory = async(req,res) => {
    try {
        const {code} = req.query
        await TmastCategory.destroy({
            where : {
                code :code
            }
        })
        res.sendStatus(200)

    } catch (error) {
        console.log(error)
    }
}

export const updateTmastCategory = async (req,res) => {
    try {
        const {id,code} = req.query
        if(id) {
        await TmastCategory.update(req.body , {
            where : {
                id : id
            }
        })
    }
    if(code){
        await TmastCategory.update(req.body , {
            where : {
                code : code
            }
        })
    }
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}