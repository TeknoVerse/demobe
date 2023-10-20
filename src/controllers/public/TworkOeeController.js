import { Op, literal } from "sequelize"
import TmastShift from "../../model/modelData/master/TmastShift.js"
import TworkOee from "../../model/modelData/public/TworkOee.js"
import TtransStop from "../../model/modelData/transaction/TtransStop.js"

export const getTworkOee = async (req,res) => {
    try {
        const {machine_code} = req.query
        if(machine_code) {
            const response = await TworkOee.findOne({
                where : {
                    machine_code : machine_code
                }
            })
            res.json(response)
        }
    } catch (error) {
        console.log(error)
    }
}
export const createTworkOee = async (req,res) => {
    try {
        const {machine_no, shift_id, date} = req.body
    
        if(machine_no, shift_id, date){

            const formatedDate = new Date(date).toLocaleDateString()

            const existDataInDataBase = await TworkOee.findOne({
                where : {
                    machine_code : machine_no,
                    shift : shift_id,
                    date : date
                }
            })

            if(!existDataInDataBase){
         


                /* Start Create Availability */

                // get Loading Time
                const getTmastSHift = await TmastShift.findOne({
                    where : {
                        id : shift_id
                    }
                })
                const startShift = getTmastSHift.start
                const endShift = getTmastSHift.end
                const getLoadingTime = getTmastSHift.loading_time
                const splitloadingTime = getLoadingTime.split(':');
                const hoursLoadingTime = parseInt(splitloadingTime[0]);
                const minutesLoadingTime = parseInt(splitloadingTime[1]);
                const secondsLoadingTime = parseInt(splitloadingTime[2]);
                const loadingTime = (hoursLoadingTime * 60) + minutesLoadingTime + (secondsLoadingTime / 60);

                // get Down Time
                const getTtransStop = await TtransStop.findAll({
                    where : {
                        [Op.or] : [
                          {
                            [Op.and] : [
                                {
                                    start : {
                                        [Op.gte] : startShift
                                    }
                                },
                                {
                                    start : {
                                        [Op.lte] : endShift
                                    }
                                }
                            ]
                          },
                          {
                            [Op.and] : [
                                {
                                    finish : {
                                        [Op.gte] : startShift
                                    }
                                },
                                {
                                    finish : {
                                        [Op.lte] : endShift
                                    }
                                }
                            ]
                          }
                        ]
                        ,
                        [Op.and]: literal(`DATE(work_date) = DATE('${formatedDate.split('/')[2] + '-' + formatedDate.split('/')[0] + '-' + formatedDate.split('/')[1]  }')`),
                    
                    }
                })

                let currentDownTime = 0

                getTtransStop.forEach((data) => {
                    const dataVlues = data.dataValues

                    if(dataVlues.duration !== null){

                    const durationParts = dataVlues.duration.split(':');
                    const hours = parseInt(durationParts[0]);
                    const minutes = parseInt(durationParts[1]);
                    const seconds = parseInt(durationParts[2]);
                    const durationInMinutes = (hours * 60) + minutes + (seconds / 60);
                    currentDownTime += durationInMinutes;
                    }

                  });

                  const downTime = currentDownTime.toFixed(2);

                  const availability = (((loadingTime - downTime) / loadingTime) * 100).toFixed(2)
                  return console.log(availability)

                /* End Create Availability */

              


                await TworkOee.create({
                    machine_code : machine_no, shift : shift_id, date : date
                })
            }else{
                console.log('awf')
            }

        }
          res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}
export const updateTworkOee = async (req,res) => {
    try {
        const {id, machine_code} = req.query
        if(id){
          await TworkOee.update(req.body, {
            where : {
                id : id
            }
          })
            res.sendStatus(200)
        }
        if(machine_code){
            await TworkOee.update(req.body, {
                where : {
                    machine_code : machine_code
                }
              })
                res.sendStatus(200)
        }
    } catch (error) {
        console.log(error)
    }
}
export const deleteTworkOee = async (req,res) => {
    try {
        const {id, machine_code} = req.query
        if(id){
          await TworkOee.destroy({
            where : {
                id : id
            }
          })
            res.sendStatus(200)
        }
        if(machine_code){
            await TworkOee.destroy({
                where : {
                    machine_code : machine_code
                }
              })
                res.sendStatus(200)
        }
    } catch (error) {
        console.log(error)
    }
}
