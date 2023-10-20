import TmastSubCategory from "../../model/modelData/master/TmastSubCategory.js"

export const getTmastSubCategory = async (req,res) => {
    try {
        const {category_code} = req.query
        if(category_code) {
            const response = await TmastSubCategory.findAll({
                where : {
                    category_code : category_code
                }
            })
            res.json(response)
        }else{

        const response = await TmastSubCategory.findAll()
        res.json(response)
    }

    } catch (error) {
        console.log(error)
    }
}

export const createTmastSubCategory = async (req,res) => {
    try {
        
        await TmastSubCategory.create(req.body)
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
    }
}

export const deleteTmastSubCategory = async(req,res) => {
    try {
        const {id,code,category_code} = req.query
        

        if(code && category_code) {
            await TmastSubCategory.destroy({
                where : {
                    code :code,
                    category_code :category_code
                }
            })
            res.sendStatus(200)
        }else{
        await TmastSubCategory.destroy({
            where : {
                id :id
            }
        })
        res.sendStatus(200)
    }

    } catch (error) {
        console.log(error)
    }
}

export const updateTmastSubCategory = async (req,res) => {
    try {
        const {id,code,category_code} = req.query
        if(id) {
        await TmastSubCategory.update(req.body , {
            where : {
                id : id
            }
        })
    }
    if(code && category_code){
        await TmastSubCategory.update(req.body , {
            where : {
                code : code,
                category_code : category_code
            }
        })
    }
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}