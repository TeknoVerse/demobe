import TtransDn from "../../model/modelData/transaction/TtransDn.js"
import fs from 'fs'


export const getTtransDn = async (req,res) => {
    try {
        const response  = await TtransDn.findAll()
        res.status(200).json(response)
        } catch (error) {
        console.log(error)
    }
}

export const deleteTtransDn = async (req,res) => {
    try {
        const {id} = req.query
        await TtransDn.destroy({
            where : {
                id : id
            }
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}
export const createTtransDn = async (req,res) => {
    try {
        const filePath = req.file.path
        const rawData = fs.readFileSync(filePath, 'utf-8')
        const lines = rawData.trim().split('\n')
/* 
        const header = lines[0].split('|')
        let headerData = {}
        header.forEach((data,index) => {
            headerData[`data_${index+1}`] = data.trim()
        }); */

        for (let i = 1; i < lines.length; i++) {
            const rowDataBody = lines[i].split('\t')
            let data = {}
            rowDataBody.forEach(async (item,index) => {
                if(index + 1 <= 89){
                    data[`field_${index+1}`] = item.trim()
                }
            });
            await TtransDn.create(data)
            
        }

        res.sendStatus(200)

    } catch (error) {
        console.log(error)
    }
}