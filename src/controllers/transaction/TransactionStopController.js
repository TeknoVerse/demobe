import { Sequelize } from "sequelize";
import TtransStop from "../../model/modelData/transaction/TtransStop.js";
import TmastMachine from "../../model/modelData/master/TmastMachine.js";
import {handleLocalTime} from "../MyFunction.js"

export const getTtransStop = async (req, res) => {
  try {
    const { id_con, machine_no, category } = req.query;

    if(machine_no) {
      const response = await TtransStop.findAll({
        where : {
          machine_no : machine_no
        }
      })
      res.json(response)
    }else{
      const response = await TtransStop.findAll()
      res.json(response)
    }

  } catch (error) {
    console.log(error);
  }
};

export const createTtransStop = async (req, res) => {
try {
  const {start, options, machine_no, time ,category_code,sub_category_code} = req.body
  
  const newTime = handleLocalTime(time)

  
  const newDate = new Date(time).toISOString('en-US', { hour12: false })
 
  

  if(machine_no){
    const getTtransStopByMachineNo = await TtransStop.findOne({
      attributes : [[Sequelize.fn('max', Sequelize.col('id')), "max_id" ]],
      where: {
        machine_no: machine_no,
      },
    })

    const getMachine = await TmastMachine.findOne({
      where : {
        code : machine_no
      }
    })

    if (getTtransStopByMachineNo && getTtransStopByMachineNo.dataValues.max_id) {
      const maxId = getTtransStopByMachineNo.dataValues.max_id;
      const currentData = await TtransStop.findOne({
        where : {
          id : maxId
        }
      })
      const currentDatavalues = currentData.dataValues
  
      if( (getMachine.category === null && currentDatavalues.finish === null) || options === "process") {
          /* Start Time */
          const startTimeParts = currentDatavalues.start.split(':');
          const startHours = parseInt(startTimeParts[0]);
          const startMinutes = parseInt(startTimeParts[1]);
          const startSeconds = parseInt(startTimeParts[2]);
          const startInSeconds = startHours * 3600 + startMinutes * 60 + startSeconds;
          /* Start Time */
      

          /* Finish Time (dalam format HH:mm:ss) */
            const finishTimeParts = newTime.split(':');
            const finishHours = parseInt(finishTimeParts[0]);
            const finishMinutes = parseInt(finishTimeParts[1]);
            const finishSeconds = parseInt(finishTimeParts[2]);
            const finishInSeconds = finishHours * 3600 + finishMinutes * 60 + finishSeconds;
            /* Finish Time */

          /* Finsih Time */
        /*   const finishDate = new Date(time);
          const finishInSeconds = finishDate.getUTCHours() * 3600 + finishDate.getUTCMinutes() * 60 + finishDate.getUTCSeconds();
           *//* Finsih Time */
          
          const totalInSeconds = finishInSeconds - startInSeconds;

          const totalHours = Math.floor(totalInSeconds / 3600);
          const totalMinutes = Math.floor((totalInSeconds % 3600) / 60);
          const totalSeconds = totalInSeconds % 60;

          /* Format to 00:00:00 */
          const formattedResult = `${totalHours.toString().padStart(2, '0')}:${totalMinutes.toString().padStart(2, '0')}:${totalSeconds.toString().padStart(2, '0')}`;
          /* Format to 00:00:00 */



          if(options === "process"){
            await TtransStop.update(
              {
              category_code : category_code,
              sub_category_code : sub_category_code,
              },{
              where : {
                id : maxId
              }
            })
          }else{
          
              if(options === "end"){

              await TtransStop.update(
                {
                finish : newTime,
                duration : formattedResult,
                },{
                where : {
                  id : maxId
                }
              })
            }else{
              if(currentDatavalues.finish === null){
                await TtransStop.update(
                  {
                  finish : newTime,
                  duration : formattedResult,
                  },{
                  where : {
                    id : maxId
                  }
                })
                await TtransStop.create({
                  machine_no : machine_no,
                  start : newTime,
                  work_date : newDate,
          
                }) 

              }
            }
         
          }

        
      }else{
     //   if(  currentDatavalues.start !== null && currentDatavalues.finish !== null ){
       
          await TtransStop.create({
            machine_no : machine_no,
            start : newTime,
            work_date : newDate,
    
          }) 

     

      }

    }else{
      if( getMachine.category !== null ){
        await TtransStop.create({
          machine_no : machine_no,
          start : newTime,
          category_code : category_code,
          sub_category_code : sub_category_code,
          work_date : newDate,
        })
        res.sendStatus(200)
      }else{
        await TtransStop.create({
          machine_no : machine_no,
          finish : newTime,
          category_code : category_code,
          sub_category_code : sub_category_code,
          work_date : newDate,
        })
        await TtransStop.create({
          machine_no : machine_no,
          start : newTime,
          category_code : category_code,
          sub_category_code : sub_category_code,
          work_date : newDate,
        })
      
      }
    }
  }
  return res.sendStatus(200)
} catch (error) {
  console.log(error)
}
};

export const deleteTtransStop = async (req, res) => {
  try {
    const { id } = req.query;
    await TtransStop.destroy({
      where: {
        id: id,
      },
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

export const updateTtransStop = async (req, res) => {
try {
  
} catch (error) {
  console.log(error)
}
};
/* export const getTtransStop = async (req, res) => {
  try {
    const { id_con, machine_no, category } = req.query;
    if ((id_con === "max") & (category === "problem")) {
      const maxIdData = await TtransStop.findOne({
        attributes: [[Sequelize.fn("max", Sequelize.col("id")), "max_id"]],
        where: {
          machine_no: machine_no,
          category: category,
        },
      });

      if (maxIdData && maxIdData.dataValues.max_id) {
        const maxId = maxIdData.dataValues.max_id;
        const response = await TtransStop.findOne({
          where: {
            id: maxId,
            category: category,
          },
        });
        res.json(response);
      }
    }

      if ((id_con === "max") & (category === "stop")) {
        const maxIdData = await TtransStop.findOne({
          attributes: [[Sequelize.fn("max", Sequelize.col("id")), "max_id"]],
          where: {
            machine_no: machine_no,
            category: category,
          },
        });

        if (maxIdData && maxIdData.dataValues.max_id) {
          const maxId = maxIdData.dataValues.max_id;
          const response = await TtransStop.findOne({
            where: {
              id: maxId,
              category: category,
            },
          });
          res.json(response);
        }
    } 
  } catch (error) {
    console.log(error);
  }
};

export const createTtransStop = async (req, res) => {
  try {
    const { machine_no, start, category } = req.body;

    if (category === "problem") {
      const cekMaxIdLightRed = await TtransStop.findOne({
        attributes: [[Sequelize.fn("max", Sequelize.col("id")), "max_id"]],
        where: {
          machine_no: machine_no,
          category: "stop",
        },
      });
      if (cekMaxIdLightRed && cekMaxIdLightRed.dataValues.max_id) {
        const maxIdLightRed = cekMaxIdLightRed.dataValues.max_id;
        await TtransStop.update(
          { finish: start },
          {
            where: {
              id: maxIdLightRed,
              machine_no: machine_no,
              category: "stop",
            },
          }
        );
        await TtransStop.create(req.body);
        res.sendStatus(201);
      } else {
        await TtransStop.create(req.body);
        res.sendStatus(201);
      }
    }

    if (category === "stop") {
      const cekMaxIdLightRed = await TtransStop.findOne({
        attributes: [[Sequelize.fn("max", Sequelize.col("id")), "max_id"]],
        where: {
          machine_no: machine_no,
          category: "problem",
        },
      });
      if (cekMaxIdLightRed && cekMaxIdLightRed.dataValues.max_id) {
        const maxIdLightRed = cekMaxIdLightRed.dataValues.max_id;
        await TtransStop.update(
          { finish: start },
          {
            where: {
              id: maxIdLightRed,
              machine_no: machine_no,
              category: "problem",
            },
          }
        );
        await TtransStop.create(req.body);
        res.sendStatus(201);
      } else {
        await TtransStop.create(req.body);
        res.sendStatus(201);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteTtransStop = async (req, res) => {
  try {
    const { id } = req.query;
    await TtransStop.destroy({
      where: {
        id: id,
      },
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

export const updateTtransStop = async (req, res) => {
  try {
    const { machine_no, category } = req.query;

    const maxIdData = await TtransStop.findOne({
      attributes: [[Sequelize.fn("max", Sequelize.col("id")), "max_id"]],
      where: {
        machine_no: machine_no,
        category: category,
      },
    });

    if (maxIdData && maxIdData.dataValues.max_id) {
      const maxId = maxIdData.dataValues.max_id;

      // Update data dengan id terbesar (terbaru)
      await TtransStop.update(req.body, {
        where: {
          machine_no: machine_no,
          category: category,
          id: maxId,
        },
      });
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
  }
};
 */