import { Sequelize } from "sequelize"
import TtransOperation from "../../model/modelData/transaction/TtransOperation.js";

export const getTtransOperation = async (req,res) => {
    try {

        const {id_con, machine_no} = req.query
        if(id_con === "max"){
            const maxIdData = await TtransOperation.findOne({
                attributes: [[ Sequelize.fn('max',  Sequelize.col('id')), 'max_id']],
                where: {
                  machine_no: machine_no
                }
              });

            if(maxIdData && maxIdData.dataValues.max_id){
                const maxId = maxIdData.dataValues.max_id;
                const response = await TtransOperation.findOne({
                    where : {
                        id : maxId
                    }
                })
                res.json(response)
            }
        }   
         if(machine_no) {
            const response = await TtransOperation.findOne({
                where : {
                    machine_no : machine_no
                }
            })
            res.json(response)

            
        }
        else{
            const response = await TtransOperation.findAll()
            res.json(response)
        }

        
    } catch (error) {
        console.log(error)
    }
}

export const createTtransOperation = async (req,res) => {
    try {
        await TtransOperation.create(req.body)
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
    }
}

export const deleteTtransOperation = async(req,res) => {
    try {
        const {id} = req.query
        await TtransOperation.destroy({
            where : {
                id :id
            }
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}

export const updateTtransOperation = async (req,res) => {
    try {
        const {machine_no,id} = req.query
        if(id){

        
        await TtransOperation.update(req.body, {
            where : {
                id : id
            }
        })
        res.sendStatus(200)
    }
    
    if(machine_no){
        await TtransOperation.update(req.body, {
            where : {
                machine_no : machine_no
            }
        })
        res.sendStatus(200)
    }

     /*    const maxIdData = await TtransOperation.findOne({
            attributes: [[ Sequelize.fn('max',  Sequelize.col('id')), 'max_id']],
            where: {
              machine_no: machine_no
            }
          });

        
          if (maxIdData && maxIdData.dataValues.max_id) {
            const maxId = maxIdData.dataValues.max_id;
            await TtransOperation.update(req.body, {
              where: {
                machine_no: machine_no,
                id: maxId
              }
            });
            res.sendStatus(200)

          }
 */
    } catch (error) {
        console.log(error)
    }
}